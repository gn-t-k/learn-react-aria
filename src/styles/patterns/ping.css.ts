import type { StyleRule } from "@vanilla-extract/css";
import { ping as pingKeyframe } from "../keyframes/ping.css";

type Props =
  | {
      duration?: string | undefined;
    }
  | undefined;

export const ping = (props?: Props) =>
  ({
    animationName: pingKeyframe,
    animationDuration: props?.duration ?? "1s",
    animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    animationIterationCount: "infinite",
  } satisfies StyleRule);
