import type { StyleRule } from "@vanilla-extract/css";
import { ping as pingKeyframe } from "../keyframes/ping.css";

type Ping = (
  props?:
    | {
        duration?: string | undefined;
      }
    | undefined
) => StyleRule;
export const ping: Ping = (props) => ({
  animationName: pingKeyframe,
  animationDuration: props?.duration ?? "1s",
  animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
  animationIterationCount: "infinite",
});
