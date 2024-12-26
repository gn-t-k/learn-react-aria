import clsx from "clsx";
import { flexiblePane } from "../styles/patterns/layouts/flexible-pane";
import { style } from "@vanilla-extract/css";

const flexiblePaneStyles = flexiblePane();

export const wrapper = flexiblePaneStyles.wrapper;

export const fixed = clsx([
  flexiblePaneStyles.fixed,
  style({
    border: "1px solid",
  }),
]);

export const flexible = clsx([
  flexiblePaneStyles.flexible,
  style({
    border: "1px solid",
  }),
]);
