import { StyleRule } from "@vanilla-extract/css";
import { bounce as bounceKeyframe } from "../../keyframes/bounce.css";

type Props =
  | {
      duration?: string | undefined;
    }
  | undefined;

export const bounce = (props?: Props) =>
  ({
    animationName: bounceKeyframe,
    animationDuration: props?.duration ?? "1s",
    animationIterationCount: "infinite",
  } satisfies StyleRule);
