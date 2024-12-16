import type { StyleRule } from "@vanilla-extract/css";
import { tokens } from "../theme.css";
import { ValueOf } from "../../utils/value-of";

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
