import type { StyleRule } from "@vanilla-extract/css";
import {
  enterTranslateX,
  enterTranslateY,
  exitTranslateX,
  exitTranslateY,
} from "../vars.css";

type SlideInFromTop = (lengthPercentage: string) => StyleRule;
export const slideInFromTop: SlideInFromTop = (lengthPercentage) => ({
  vars: {
    [enterTranslateY]: `-${lengthPercentage}`,
  },
});

type SlideInFromBottom = (lengthPercentage: string) => StyleRule;
export const slideInFromBottom: SlideInFromBottom = (lengthPercentage) => ({
  vars: {
    [enterTranslateY]: lengthPercentage,
  },
});

type SlideInFromLeft = (lengthPercentage: string) => StyleRule;
export const slideInFromLeft: SlideInFromLeft = (lengthPercentage) => ({
  vars: {
    [enterTranslateX]: `-${lengthPercentage}`,
  },
});

type SlideInFromRight = (lengthPercentage: string) => StyleRule;
export const slideInFromRight: SlideInFromRight = (lengthPercentage) => ({
  vars: {
    [enterTranslateX]: lengthPercentage,
  },
});

type SlideOutToTop = (lengthPercentage: string) => StyleRule;
export const slideOutToTop: SlideOutToTop = (lengthPercentage) => ({
  vars: {
    [exitTranslateY]: `-${lengthPercentage}`,
  },
});

type SlideOutToBottom = (lengthPercentage: string) => StyleRule;
export const slideOutToBottom: SlideOutToBottom = (lengthPercentage) => ({
  vars: {
    [exitTranslateY]: lengthPercentage,
  },
});

type SlideOutToLeft = (lengthPercentage: string) => StyleRule;
export const slideOutToLeft: SlideOutToLeft = (lengthPercentage) => ({
  vars: {
    [exitTranslateX]: `-${lengthPercentage}`,
  },
});

type SlideOutToRight = (lengthPercentage: string) => StyleRule;
export const slideOutToRight: SlideOutToRight = (lengthPercentage) => ({
  vars: {
    [exitTranslateX]: lengthPercentage,
  },
});
