import { StyleRule } from "@vanilla-extract/css";
import { pulse as pulseKeyframe } from "../keyframes/pulse.css";

type Pulse = (
  props?:
    | {
        duration?: string | undefined;
      }
    | undefined
) => StyleRule;
export const pulse: Pulse = (props) => ({
  animationName: pulseKeyframe,
  animationDuration: props?.duration ?? "2s",
  animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
  animationIterationCount: "infinite",
});
