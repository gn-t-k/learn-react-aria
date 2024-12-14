import type { StyleRule } from "@vanilla-extract/css";
import { spin } from "../keyframes/spin.css";
import { ping } from "../keyframes/ping.css";
import { pulse } from "../keyframes/pulse.css";
import { bounce } from "../keyframes/bounce.css";

type Animation = (props: {
  name: "spin" | "ping" | "pulse" | "bounce";
  duration?: string | undefined;
}) => StyleRule;

export const animation: Animation = (props) => {
  return {
    spin: {
      animationName: spin,
      animationDuration: props?.duration ?? "1s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
    ping: {
      animationName: ping,
      animationDuration: props?.duration ?? "1s",
      animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      animationIterationCount: "infinite",
    },
    pulse: {
      animationName: pulse,
      animationDuration: props?.duration ?? "2s",
      animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
      animationIterationCount: "infinite",
    },
    bounce: {
      animationName: bounce,
      animationDuration: props?.duration ?? "1s",
      animationIterationCount: "infinite",
    },
  }[props.name];
};
