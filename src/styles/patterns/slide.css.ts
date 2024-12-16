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

type SlideInFromTopProps =
  | {
      duration?: string | undefined;
      enterTranslateY?: string | undefined;
    }
  | undefined;

export const slideInFromTop = (props?: SlideInFromTopProps) =>
  ({
    animationName: enter,
    animationDuration: props?.duration ?? "0.2s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [enterTranslateY]: `-${props?.enterTranslateY ?? "100%"}`,
    },
  } satisfies StyleRule);

type SlideInFromBottomProps =
  | {
      duration?: string | undefined;
      enterTranslateY?: string | undefined;
    }
  | undefined;

export const slideInFromBottom = (props?: SlideInFromBottomProps) =>
  ({
    animationName: enter,
    animationDuration: props?.duration ?? "0.2s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [enterTranslateY]: props?.enterTranslateY ?? "100%",
    },
  } satisfies StyleRule);

type SlideInFromLeftProps =
  | {
      duration?: string | undefined;
      enterTranslateX?: string | undefined;
    }
  | undefined;

export const slideInFromLeft = (props?: SlideInFromLeftProps) =>
  ({
    animationName: enter,
    animationDuration: props?.duration ?? "0.2s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [enterTranslateX]: `-${props?.enterTranslateX ?? "100%"}`,
    },
  } satisfies StyleRule);

type SlideInFromRightProps =
  | {
      duration?: string | undefined;
      enterTranslateX?: string | undefined;
    }
  | undefined;

export const slideInFromRight = (props?: SlideInFromRightProps) =>
  ({
    animationName: enter,
    animationDuration: props?.duration ?? "0.2s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [enterTranslateX]: props?.enterTranslateX ?? "100%",
    },
  } satisfies StyleRule);

type SlideOutToTopProps =
  | {
      duration?: string | undefined;
      exitTranslateY?: string | undefined;
    }
  | undefined;

export const slideOutToTop = (props?: SlideOutToTopProps) =>
  ({
    animationName: exit,
    animationDuration: props?.duration ?? "0.3s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [exitTranslateY]: `-${props?.exitTranslateY ?? "100%"}`,
    },
  } satisfies StyleRule);

type SlideOutToBottomProps =
  | {
      duration?: string | undefined;
      exitTranslateY?: string | undefined;
    }
  | undefined;

export const slideOutToBottom = (props?: SlideOutToBottomProps) =>
  ({
    animationName: exit,
    animationDuration: props?.duration ?? "0.3s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [exitTranslateY]: props?.exitTranslateY ?? "100%",
    },
  } satisfies StyleRule);

type SlideOutToLeftProps =
  | {
      duration?: string | undefined;
      exitTranslateX?: string | undefined;
    }
  | undefined;

export const slideOutToLeft = (props?: SlideOutToLeftProps) =>
  ({
    animationName: exit,
    animationDuration: props?.duration ?? "0.3s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [exitTranslateX]: `-${props?.exitTranslateX ?? "100%"}`,
    },
  } satisfies StyleRule);

type SlideOutToRightProps =
  | {
      duration?: string | undefined;
      exitTranslateX?: string | undefined;
    }
  | undefined;

export const slideOutToRight = (props?: SlideOutToRightProps) =>
  ({
    animationName: exit,
    animationDuration: props?.duration ?? "0.3s",
    animationTimingFunction: tokens.transitionTimingFunction.easeInOut,
    vars: {
      [exitTranslateX]: props?.exitTranslateX ?? "100%",
    },
  } satisfies StyleRule);
