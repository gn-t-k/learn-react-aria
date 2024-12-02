import { useRef, type FC, type HTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import * as styles from "./calendar.css";

import {
  useCalendar,
  useCalendarGrid,
  useCalendarCell,
  useHover,
  useLocale,
  AriaCalendarGridProps,
  AriaCalendarProps,
} from "react-aria";
import { useCalendarState, CalendarState } from "react-stately";
import {
  createCalendar,
  getWeeksInMonth,
  CalendarDate,
} from "@internationalized/date";
import { Button } from "../button/button";
import { AriaButtonProps } from "@react-types/button";
import { DateValue } from "@react-types/calendar";

type CalendarHeadingProps = {
  headerProps?: HTMLAttributes<HTMLHeadingElement>;
  prevButtonProps?: AriaButtonProps;
  nextButtonProps?: AriaButtonProps;
  clearButtonProps?: AriaButtonProps;
  title: string;
};
const CalendarHeading: FC<CalendarHeadingProps> = ({
  headerProps,
  prevButtonProps,
  nextButtonProps,
  clearButtonProps,
  title,
}) => {
  return (
    <header className={styles.headingWrapper} {...headerProps}>
      <Button variant="ghost" size="sm" slot="previous" {...prevButtonProps}>
        <ChevronLeft aria-hidden className={styles.headingButton} />
      </Button>
      <time className={styles.heading}>{title}</time>
      <Button size="sm" variant="outline" {...clearButtonProps}>
        選択を解除
      </Button>
      <Button variant="ghost" size="sm" slot="next" {...nextButtonProps}>
        <ChevronRight aria-hidden className={styles.headingButton} />
      </Button>
    </header>
  );
};

type CalendarGridProps = AriaCalendarGridProps & {
  state: CalendarState;
};
const CalendarGrid: FC<CalendarGridProps> = ({ state, ...props }) => {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps} className={styles.grid}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th className={styles.gridHeaderCell} key={index}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.gridBody}>
        {Array.from({ length: weeksInMonth }).map((_, weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

type CalendarCellProps = {
  state: CalendarState;
  date: CalendarDate;
};
const CalendarCell: FC<CalendarCellProps> = ({ state, date }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { cellProps, buttonProps, isSelected, isDisabled, formattedDate } =
    useCalendarCell({ date }, state, ref);
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        {...hoverProps}
        data-hovered={isHovered}
        ref={ref}
        className={styles.cell({
          isDisabled,
          isSelected,
        })}
      >
        {formattedDate}
      </div>
    </td>
  );
};

type CalendarProps = AriaCalendarProps<DateValue>;
export const Calendar: FC<CalendarProps> = (props) => {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  return (
    <div {...calendarProps} className={styles.wrapper}>
      <CalendarHeading
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
        clearButtonProps={{
          isDisabled: state.value === null,
          onPress: (_) => state.setValue(null),
        }}
        title={title}
      />
      <CalendarGrid state={state} />
    </div>
  );
};
