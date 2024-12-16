import { StyleRule } from "@vanilla-extract/css";
import { spin as spinKeyframe } from "../../keyframes/spin.css";

type Props =
  | {
      duration?: string | undefined;
    }
  | undefined;
export const spin = (props?: Props) =>
  ({
    animationName: spinKeyframe,
    animationDuration: props?.duration ?? "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  } satisfies StyleRule);
