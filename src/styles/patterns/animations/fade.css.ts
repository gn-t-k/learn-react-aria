import type { StyleRule } from "@vanilla-extract/css";
import { enterOpacity, exitOpacity } from "../../vars.css";
import { enter } from "../../keyframes/enter.css";
import { tokens } from "../../theme.css";
import { exit } from "../../keyframes/exit.css";

type FadeInProps =
  | {
      duration?: string | undefined;
      enterOpacity?: string | undefined;
    }
  | undefined;

export const fadeIn = (props?: FadeInProps) =>
  ({
    animationName: enter,
    animationDuration: props?.duration ?? "0.2s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [enterOpacity]: props?.enterOpacity ?? "0%",
    },
  } satisfies StyleRule);

type FadeOutProps =
  | {
      duration?: string | undefined;
      exitOpacity?: string | undefined;
    }
  | undefined;

export const fadeOut = (props?: FadeOutProps) =>
  ({
    animationName: exit,
    animationDuration: props?.duration ?? "0.3s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [exitOpacity]: props?.exitOpacity ?? "0%",
    },
  } satisfies StyleRule);
