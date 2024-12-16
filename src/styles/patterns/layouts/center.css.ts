import { StyleRule } from "@vanilla-extract/css";
import { ValueOf } from "../../../utils/value-of";
import { tokens } from "../../theme.css";

type Props =
  | {
      maxWidth?: ValueOf<typeof tokens.maxWidth> | undefined;
      gutters?: ValueOf<typeof tokens.spacing> | undefined;
      vertical?: boolean | undefined;
    }
  | undefined;

export const center = (props?: Props) =>
  ({
    boxSizing: "content-box",
    maxWidth: props?.maxWidth ?? "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: props?.vertical === false ? "flex-start" : "center",
    paddingLeft: props?.gutters ?? 0,
    paddingRight: props?.gutters ?? 0,
  } satisfies StyleRule);
