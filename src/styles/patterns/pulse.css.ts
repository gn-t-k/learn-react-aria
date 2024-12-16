import { StyleRule } from "@vanilla-extract/css";
import { pulse as pulseKeyframe } from "../keyframes/pulse.css";

type Props =
  | {
      duration?: string | undefined;
    }
  | undefined;

export const pulse = (props?: Props) =>
  ({
    animationName: pulseKeyframe,
    animationDuration: props?.duration ?? "2s",
    animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
    animationIterationCount: "infinite",
  } satisfies StyleRule);
