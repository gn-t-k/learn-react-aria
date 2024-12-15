import { StyleRule } from "@vanilla-extract/css";
import { bounce as bounceKeyframe } from "../keyframes/bounce.css";
type Bounce = (
  props?:
    | {
        duration?: string | undefined;
      }
    | undefined
) => StyleRule;
export const bounce: Bounce = (props) => ({
  animationName: bounceKeyframe,
  animationDuration: props?.duration ?? "1s",
  animationIterationCount: "infinite",
});
