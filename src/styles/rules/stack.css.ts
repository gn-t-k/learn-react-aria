import type { StyleRule } from "@vanilla-extract/css";

type Stack = (props: { gap: StyleRule["gap"]; reverse?: boolean }) => StyleRule;
export const stack: Stack = (props) => ({
  display: "flex",
  flexDirection: props.reverse ? "column-reverse" : "column",
  gap: props.gap,
});
