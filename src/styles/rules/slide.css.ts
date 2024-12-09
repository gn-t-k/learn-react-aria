import type { StyleRule } from "@vanilla-extract/css";
import {
  enterTranslateX,
  enterTranslateY,
  exitTranslateX,
  exitTranslateY,
} from "../vars.css";
import { enter } from "../keyframes/enter.css";
import { tokens } from "../theme.css";
import { exit } from "../keyframes/exit.css";

type SlideInFromTop = (
  props?:
    | {
        duration?: string | undefined;
        enterTranslateY?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideInFromTop: SlideInFromTop = (props) => ({
  animationName: enter,
  animationDuration: props?.duration ?? "0.2s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [enterTranslateY]: `-${props?.enterTranslateY ?? "100%"}`,
  },
});

type SlideInFromBottom = (
  props?:
    | {
        duration?: string | undefined;
        enterTranslateY?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideInFromBottom: SlideInFromBottom = (props) => ({
  animationName: enter,
  animationDuration: props?.duration ?? "0.2s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [enterTranslateY]: props?.enterTranslateY ?? "100%",
  },
});

type SlideInFromLeft = (
  props?:
    | {
        duration?: string | undefined;
        enterTranslateX?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideInFromLeft: SlideInFromLeft = (props) => ({
  animationName: enter,
  animationDuration: props?.duration ?? "0.2s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [enterTranslateX]: `-${props?.enterTranslateX ?? "100%"}`,
  },
});

type SlideInFromRight = (
  props?:
    | {
        duration?: string | undefined;
        enterTranslateX?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideInFromRight: SlideInFromRight = (props) => ({
  animationName: enter,
  animationDuration: props?.duration ?? "0.2s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [enterTranslateX]: props?.enterTranslateX ?? "100%",
  },
});

type SlideOutToTop = (
  props?:
    | {
        duration?: string | undefined;
        exitTranslateY?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideOutToTop: SlideOutToTop = (props) => ({
  animationName: exit,
  animationDuration: props?.duration ?? "0.3s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [exitTranslateY]: `-${props?.exitTranslateY ?? "100%"}`,
  },
});

type SlideOutToBottom = (
  props?:
    | {
        duration?: string | undefined;
        exitTranslateY?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideOutToBottom: SlideOutToBottom = (props) => ({
  animationName: exit,
  animationDuration: props?.duration ?? "0.3s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [exitTranslateY]: props?.exitTranslateY ?? "100%",
  },
});

type SlideOutToLeft = (
  props?:
    | {
        duration?: string | undefined;
        exitTranslateX?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideOutToLeft: SlideOutToLeft = (props) => ({
  animationName: exit,
  animationDuration: props?.duration ?? "0.3s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [exitTranslateX]: `-${props?.exitTranslateX ?? "100%"}`,
  },
});

type SlideOutToRight = (
  props?:
    | {
        duration?: string | undefined;
        exitTranslateX?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideOutToRight: SlideOutToRight = (props) => ({
  animationName: exit,
  animationDuration: props?.duration ?? "0.3s",
  animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
  vars: {
    [exitTranslateX]: props?.exitTranslateX ?? "100%",
  },
});
