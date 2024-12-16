import { StyleRule } from "@vanilla-extract/css";
import { ValueOf } from "../../../utils/value-of";
import { tokens } from "../../theme.css";

type Props =
  | {
      spaces?: ValueOf<typeof tokens.spacing> | undefined;
      reverse?: boolean | undefined;
    }
  | undefined;

export const stack = (props?: Props) =>
  ({
    display: "flex",
    flexDirection: props?.reverse ? "column-reverse" : "column",
    gap: props?.spaces ?? 0,
  } satisfies StyleRule);
