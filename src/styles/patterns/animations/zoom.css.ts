import type { StyleRule } from "@vanilla-extract/css";
import { enterScale, exitScale } from "../../vars.css";
import { enter } from "../../keyframes/enter.css";
import { tokens } from "../../theme.css";
import { exit } from "../../keyframes/exit.css";

type ZoomInProps =
  | {
      duration?: string | undefined;
      enterScale?: string | undefined;
    }
  | undefined;

export const zoomIn = (props?: ZoomInProps) =>
  ({
    animationName: enter,
    animationDuration: props?.duration ?? "0.2s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [enterScale]: props?.enterScale ?? "0.95",
    },
  } satisfies StyleRule);

type ZoomOutProps =
  | {
      duration?: string | undefined;
      exitScale?: string | undefined;
    }
  | undefined;

export const zoomOut = (props?: ZoomOutProps) =>
  ({
    animationName: exit,
    animationDuration: props?.duration ?? "0.3s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [exitScale]: props?.exitScale ?? "0.95",
    },
  } satisfies StyleRule);
