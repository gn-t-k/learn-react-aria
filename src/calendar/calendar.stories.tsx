import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";
import { DateValue } from "@react-types/calendar";
import { parseDate } from "@internationalized/date";
import { useCallback, useState } from "react";
import { useTheme } from "../use-theme/use-theme";
import { Button } from "../button/button";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const { theme, toggleTheme } = useTheme();
    const today = parseDate("2024-12-18");
    const [selected, setSelected] = useState<DateValue | null>(null);

    type OnChange = (date: DateValue) => void;
    const onChange = useCallback<OnChange>((date) => {
      setSelected(date);
    }, []);

    return (
      <div>
        <Calendar
          onChange={onChange}
          today={today}
          eventDates={["2024-12-01", "2024-12-28", "2025-01-01"].map((date) =>
            parseDate(date)
          )}
        />
        <p>{selected ? selected.toString() : "No date selected"}</p>
        <Button onPress={toggleTheme}>{theme}</Button>
      </div>
    );
  },
};
