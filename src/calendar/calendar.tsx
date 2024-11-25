import { useContext, type FC, type HTMLAttributes } from "react";
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

import * as buttonStyles from "../button/button.css";

export const Calendar = AriaCalendar;

export const RangeCalendar = AriaRangeCalendar;

type CalendarHeadingProps = HTMLAttributes<HTMLElement>;
export const CalendarHeading: FC<CalendarHeadingProps> = (props) => {
  const { direction } = useLocale();

  return (
    <header {...props}>
      <AriaButton slot="previous">
        {direction === "rtl" ? (
          <ChevronRight aria-hidden />
        ) : (
          <ChevronLeft aria-hidden />
        )}
      </AriaButton>
      <AriaHeading />
      <AriaButton slot="next">
        {direction === "rtl" ? (
          <ChevronLeft aria-hidden />
        ) : (
          <ChevronRight aria-hidden />
        )}
      </AriaButton>
    </header>
  );
};

type CalendarGridProps = AriaCalendarGridProps;
export const CalendarGrid: FC<CalendarGridProps> = ({
  className,
  ...props
}) => {
  return <AriaCalendarGrid className={clsx([className])} {...props} />;
};

type CalendarGridHeaderProps = AriaCalendarGridHeaderProps;
export const CalendarGridHeader: FC<CalendarGridHeaderProps> = (props) => {
  return <AriaCalendarGridHeader {...props} />;
};

type CalendarHeaderCellProps = AriaCalendarHeaderCellProps;
export const CalendarHeaderCell: FC<CalendarHeaderCellProps> = ({
  className,
  ...props
}) => {
  return <AriaCalendarHeaderCell className={clsx([className])} {...props} />;
};

type CalendarGridBodyProps = AriaCalendarGridBodyProps;
export const CalendarGridBody: FC<CalendarGridBodyProps> = ({
  className,
  ...props
}) => {
  return <AriaCalendarGridBody className={clsx([className])} {...props} />;
};

type CalendarCellProps = AriaCalendarCellProps;
export const CalendarCell: FC<CalendarCellProps> = ({
  className,
  ...props
}) => {
  const isRange = Boolean(useContext(AriaRangeCalendarStateContext));

  return (
    <AriaCalendarCell
      className={composeRenderProps(className, (className, renderProps) =>
        clsx([buttonStyles.button({ variant: "ghost" }), className])
      )}
      {...props}
    />
  );
};
