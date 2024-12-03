import { useCallback, useRef, type FC, type HTMLAttributes } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import * as styles from "./calendar.css";

import {
  useCalendar,
  useCalendarGrid,
  useCalendarCell,
  useLocale,
  AriaCalendarGridProps,
  AriaCalendarProps,
} from "react-aria";
import { Button as AriaButton } from "react-aria-components";
import { useCalendarState, CalendarState } from "react-stately";
import {
  createCalendar,
  getWeeksInMonth,
  CalendarDate,
} from "@internationalized/date";
import { AriaButtonProps } from "@react-types/button";
import { DateValue } from "@react-types/calendar";
import { Button } from "../button/button";

type CalendarProps = AriaCalendarProps<DateValue> & {
  today: CalendarDate;
  eventDates: CalendarDate[];
};
export const Calendar: FC<CalendarProps> = ({
  today,
  eventDates,
  ...props
}) => {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
    defaultFocusedValue: today,
  });
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  return (
    <div {...calendarProps} className={styles.wrapper}>
      <CalendarHeading
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
        title={title}
      />
      <CalendarGrid
        state={state}
        selectedDate={state.value}
        today={today}
        eventDates={eventDates}
      />
    </div>
  );
};

type CalendarHeadingProps = {
  headerProps?: HTMLAttributes<HTMLHeadingElement>;
  prevButtonProps?: AriaButtonProps;
  nextButtonProps?: AriaButtonProps;
  title: string;
};
const CalendarHeading: FC<CalendarHeadingProps> = ({
  headerProps,
  prevButtonProps,
  nextButtonProps,
  title,
}) => {
  return (
    <header className={styles.headingWrapper} {...headerProps}>
      <Button size="icon" variant="ghost" slot="previous" {...prevButtonProps}>
        <ChevronLeft aria-hidden className={styles.headingButtonIcon} />
      </Button>
      <time className={styles.heading}>{title}</time>
      <Button size="icon" variant="ghost" slot="next" {...nextButtonProps}>
        <ChevronRight aria-hidden className={styles.headingButtonIcon} />
      </Button>
    </header>
  );
};

type CalendarGridProps = AriaCalendarGridProps & {
  state: CalendarState;
  selectedDate: CalendarDate | null;
  today: CalendarDate;
  eventDates: CalendarDate[];
};
const CalendarGrid: FC<CalendarGridProps> = ({
  state,
  selectedDate,
  today,
  eventDates,
  ...props
}) => {
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
          <CalendarRow
            key={weekIndex}
            state={state}
            weekIndex={weekIndex}
            today={today}
            eventDates={eventDates}
          />
        ))}
      </tbody>
    </table>
  );
};

type CalendarRowProps = {
  state: CalendarState;
  weekIndex: number;
  today: CalendarDate;
  eventDates: CalendarDate[];
};
const CalendarRow: FC<CalendarRowProps> = ({
  state,
  weekIndex,
  today,
  eventDates,
}) => {
  return (
    <tr>
      {state
        .getDatesInWeek(weekIndex)
        .map((date, i) =>
          date ? (
            <CalendarCell
              key={i}
              state={state}
              date={date}
              isToday={date.compare(today) === 0}
              hasEvent={eventDates.some((event) => event.compare(date) === 0)}
            />
          ) : (
            <td key={i} />
          )
        )}
    </tr>
  );
};

type CalendarCellProps = {
  state: CalendarState;
  date: CalendarDate;
  isToday: boolean;
  hasEvent: boolean;
};
const CalendarCell: FC<CalendarCellProps> = ({
  state,
  date,
  isToday,
  hasEvent,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { cellProps, buttonProps, isSelected, isDisabled, formattedDate } =
    useCalendarCell({ date }, state, ref);
  const onPress = useCallback(() => {
    if (state.isSelected(date)) {
      state.setValue(null);
    } else {
      state.setValue(date);
    }
  }, [state.isSelected, state.setValue, date]);

  return (
    <td {...cellProps} {...buttonProps}>
      <AriaButton
        ref={ref}
        isDisabled={isDisabled}
        className={styles.cell({ isSelected, hasEvent, isToday })}
        onPress={onPress}
      >
        {formattedDate}
      </AriaButton>
    </td>
  );
};
