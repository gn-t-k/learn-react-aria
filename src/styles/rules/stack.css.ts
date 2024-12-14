import type { StyleRule } from "@vanilla-extract/css";
import { tokens } from "../theme.css";
import { ValueOf } from "../../utils/value-of";

type Stack = (
  props?:
    | {
        spaces?: ValueOf<typeof tokens.spacing> | undefined;
        reverse?: boolean | undefined;
      }
    | undefined
) => StyleRule;
export const stack: Stack = (props) => ({
  display: "flex",
  flexDirection: props?.reverse ? "column-reverse" : "column",
  gap: props?.spaces ?? 0,
});
