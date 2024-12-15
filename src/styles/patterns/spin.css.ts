import { StyleRule } from "@vanilla-extract/css";
import { spin as spinKeyframe } from "../keyframes/spin.css";

type Spin = (
  props?:
    | {
        duration?: string | undefined;
      }
    | undefined
) => StyleRule;
export const spin: Spin = (props) => ({
  animationName: spinKeyframe,
  animationDuration: props?.duration ?? "1s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
});
