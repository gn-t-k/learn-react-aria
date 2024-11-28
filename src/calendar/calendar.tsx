import {
  ComponentProps,
  useCallback,
  useContext,
  useState,
  type FC,
  type HTMLAttributes,
} from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Button as AriaButton,
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarCellProps as AriaCalendarCellProps,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarGridBodyProps as AriaCalendarGridBodyProps,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarGridHeaderProps as AriaCalendarGridHeaderProps,
  CalendarGridProps as AriaCalendarGridProps,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  CalendarHeaderCellProps as AriaCalendarHeaderCellProps,
  CalendarProps as AriaCalendarProps,
  DateValue as AriaDateValue,
  Heading as AriaHeading,
  RangeCalendar as AriaRangeCalendar,
  RangeCalendarProps as AriaRangeCalendarProps,
  RangeCalendarStateContext as AriaRangeCalendarStateContext,
  composeRenderProps,
  Text,
  useLocale,
} from "react-aria-components";
import clsx from "clsx";

import * as styles from "./calendar.css";

import * as buttonStyles from "../button/button.css";
import { Button } from "../button/button";

type CalendarHeadingProps = HTMLAttributes<HTMLElement>;
const CalendarHeading: FC<CalendarHeadingProps> = (props) => {
  const { direction } = useLocale();

  return (
    <header className={styles.headingWrapper} {...props}>
      <Button variant="ghost" size="sm" slot="previous">
        {direction === "rtl" ? (
          <ChevronRight aria-hidden className={styles.headingButton} />
        ) : (
          <ChevronLeft aria-hidden className={styles.headingButton} />
        )}
      </Button>
      <AriaHeading className={styles.heading} />
      <Button variant="ghost" size="sm" slot="next">
        {direction === "rtl" ? (
          <ChevronLeft aria-hidden className={styles.headingButton} />
        ) : (
          <ChevronRight aria-hidden className={styles.headingButton} />
        )}
      </Button>
    </header>
  );
};

type CalendarGridProps = AriaCalendarGridProps;
const CalendarGrid: FC<CalendarGridProps> = ({ className, ...props }) => {
  return (
    <AriaCalendarGrid className={clsx([styles.grid, className])} {...props} />
  );
};

type CalendarGridHeaderProps = AriaCalendarGridHeaderProps;
const CalendarGridHeader: FC<CalendarGridHeaderProps> = (props) => {
  return <AriaCalendarGridHeader {...props} />;
};

type CalendarHeaderCellProps = AriaCalendarHeaderCellProps;
const CalendarHeaderCell: FC<CalendarHeaderCellProps> = ({
  className,
  ...props
}) => {
  return (
    <AriaCalendarHeaderCell
      className={clsx([styles.gridHeaderCell, className])}
      {...props}
    />
  );
};

type CalendarGridBodyProps = AriaCalendarGridBodyProps;
const CalendarGridBody: FC<CalendarGridBodyProps> = ({
  className,
  ...props
}) => {
  return (
    <AriaCalendarGridBody
      className={clsx([styles.gridBody, className])}
      {...props}
    />
  );
};

type CalendarCellProps = AriaCalendarCellProps;
const CalendarCell: FC<CalendarCellProps> = ({ className, ...props }) => {
  return (
    <AriaCalendarCell
      className={composeRenderProps(className, (className, renderProps) =>
        clsx([
          styles.cell({
            isDisabled: renderProps.isDisabled,
            isSelected: renderProps.isSelected,
          }),
          className,
        ])
      )}
      {...props}
    />
  );
};

type CalendarProps = AriaCalendarProps<AriaDateValue>;
export const Calendar: FC<CalendarProps> = ({ className, ...props }) => {
  return (
    <AriaCalendar
      className={composeRenderProps(className, (className) =>
        clsx([styles.wrapper, className])
      )}
      {...props}
    >
      <CalendarHeading />
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  );
};
