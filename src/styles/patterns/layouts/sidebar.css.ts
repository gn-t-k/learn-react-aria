import { StyleRule } from "@vanilla-extract/css";
import { ValueOf } from "../../../utils/value-of";
import { tokens } from "../../theme.css";

type Props =
  | {
      side?: "left" | "right" | undefined;
      sideWidth?: ValueOf<typeof tokens.width> | undefined;
      contentMinWidth?: ValueOf<typeof tokens.width> | undefined;
      gutter?: ValueOf<typeof tokens.spacing> | undefined;
    }
  | undefined;
export const withSidebar = (props: Props) =>
  ({
    display: "flex",
    flexWrap: "wrap",
    gap: props?.gutter ?? tokens.spacing["2"],
    selectors: {
      "& > :first-child": {
        flexBasis: props?.sideWidth ?? tokens.width["20"],
        flexGrow: 1,
      },
      "& > :last-child": {
        flexBasis: 0,
        flexGrow: 999,
        minWidth: props?.contentMinWidth ?? "50%",
      },
    },
  } satisfies StyleRule);
