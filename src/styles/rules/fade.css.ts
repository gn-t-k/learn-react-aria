import type { StyleRule } from "@vanilla-extract/css";
import { enterOpacity, exitOpacity } from "../vars.css";
import { enter } from "../keyframes/enter.css";
import { tokens } from "../theme.css";
import { exit } from "../keyframes/exit.css";

type FadeIn = (
  props?:
    | {
        duration?: string | undefined;
        enterOpacity?: string | undefined;
      }
    | undefined
) => StyleRule;
export const fadeIn: FadeIn = (props) => ({
  animationName: enter,
  animationDuration: props?.duration ?? "0.2s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [enterOpacity]: props?.enterOpacity ?? "0%",
  },
});

type FadeOut = (
  props?:
    | {
        duration?: string | undefined;
        exitOpacity?: string | undefined;
      }
    | undefined
) => StyleRule;
export const fadeOut: FadeOut = (props) => ({
  animationName: exit,
  animationDuration: props?.duration ?? "0.3s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [exitOpacity]: props?.exitOpacity ?? "0%",
  },
});
