import { flexiblePane } from "../styles/patterns/layouts/flexible-pane";
import { style } from "@vanilla-extract/css";

const flexiblePaneStyles = flexiblePane();

export const wrapper = style({
  ...flexiblePaneStyles.wrapper,
});

export const fixed = style({
  ...flexiblePaneStyles.fixed,
  border: "1px solid",
});

export const flexible = style({
  ...flexiblePaneStyles.flexible,
  border: "1px solid",
});
