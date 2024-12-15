import type { StyleRule } from "@vanilla-extract/css";
import { tokens } from "../theme.css";
import { ValueOf } from "../../utils/value-of";

type Center = (
  props?:
    | {
        maxWidth?: ValueOf<typeof tokens.maxWidth> | undefined;
        gutters?: ValueOf<typeof tokens.spacing> | undefined;
        vertical?: boolean | undefined;
      }
    | undefined
) => StyleRule;
export const center: Center = (props) => ({
  boxSizing: "content-box",
  maxWidth: props?.maxWidth ?? "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: props?.vertical === false ? "flex-start" : "center",
  paddingLeft: props?.gutters ?? 0,
  paddingRight: props?.gutters ?? 0,
});
