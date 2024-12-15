import { StyleRule } from "@vanilla-extract/css";
import { ValueOf } from "../../utils/value-of";
import { tokens } from "../theme.css";

type Cluster = (
  props?:
    | {
        spaces?: ValueOf<typeof tokens.spacing> | undefined;
        justifyContent?: StyleRule["justifyContent"] | undefined;
        alignItems?: StyleRule["alignItems"] | undefined;
      }
    | undefined
) => StyleRule;
export const cluster: Cluster = (props) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: props?.spaces ?? 0,
  justifyContent: props?.justifyContent ?? "center",
  alignItems: props?.alignItems ?? "center",
});
