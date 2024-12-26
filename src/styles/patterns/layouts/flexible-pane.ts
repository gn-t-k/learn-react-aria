import { styleVariants } from "@vanilla-extract/css";
import { ValueOf } from "../../../utils/value-of";
import { tokens } from "../../theme.css";

type Props =
  | {
      fixedWidth?: ValueOf<typeof tokens.width> | undefined;
      flexibleMinWidth?: ValueOf<typeof tokens.width> | undefined;
      gutter?: ValueOf<typeof tokens.spacing> | undefined;
    }
  | undefined;
export const flexiblePane = (props?: Props) => {
  return styleVariants({
    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: props?.gutter ?? tokens.spacing["2"],
    },
    fixed: {
      flexBasis: props?.fixedWidth ?? tokens.width["80"],
      flexGrow: 1,
    },
    flexible: {
      flexBasis: 0,
      flexGrow: 999,
      minWidth: props?.flexibleMinWidth ?? "50%",
    },
  });
};
