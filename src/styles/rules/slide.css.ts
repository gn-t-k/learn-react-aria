import type { StyleRule } from "@vanilla-extract/css";
import {
  enterTranslateX,
  enterTranslateY,
  exitTranslateX,
  exitTranslateY,
} from "../vars.css";
import deepmerge from "deepmerge";
import { enterBase } from "./enter-base.css";
import { exitBase } from "./exit-base.css";

type SlideInFromTop = (
  props?:
    | {
        duration?: string | undefined;
        enterTranslateY?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideInFromTop: SlideInFromTop = (props) =>
  deepmerge.all<StyleRule>([
    enterBase(props?.duration),
    {
      vars: {
        [enterTranslateY]: `-${props?.enterTranslateY ?? "100%"}`,
      },
    },
  ]);

type SlideInFromBottom = (
  props?:
    | {
        duration?: string | undefined;
        enterTranslateY?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideInFromBottom: SlideInFromBottom = (props) =>
  deepmerge.all<StyleRule>([
    enterBase(props?.duration),
    {
      vars: {
        [enterTranslateY]: props?.enterTranslateY ?? "100%",
      },
    },
  ]);

type SlideInFromLeft = (
  props?:
    | {
        duration?: string | undefined;
        enterTranslateX?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideInFromLeft: SlideInFromLeft = (props) =>
  deepmerge.all<StyleRule>([
    enterBase(props?.duration),
    {
      vars: {
        [enterTranslateX]: `-${props?.enterTranslateX ?? "100%"}`,
      },
    },
  ]);

type SlideInFromRight = (
  props?:
    | {
        duration?: string | undefined;
        enterTranslateX?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideInFromRight: SlideInFromRight = (props) =>
  deepmerge.all<StyleRule>([
    enterBase(props?.duration),
    {
      vars: {
        [enterTranslateX]: props?.enterTranslateX ?? "100%",
      },
    },
  ]);

type SlideOutToTop = (
  props?:
    | {
        duration?: string | undefined;
        exitTranslateY?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideOutToTop: SlideOutToTop = (props) =>
  deepmerge.all<StyleRule>([
    exitBase(props?.duration),
    {
      vars: {
        [exitTranslateY]: `-${props?.exitTranslateY ?? "100%"}`,
      },
    },
  ]);

type SlideOutToBottom = (
  props?:
    | {
        duration?: string | undefined;
        exitTranslateY?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideOutToBottom: SlideOutToBottom = (props) =>
  deepmerge.all<StyleRule>([
    exitBase(props?.duration),
    {
      vars: {
        [exitTranslateY]: props?.exitTranslateY ?? "100%",
      },
    },
  ]);

type SlideOutToLeft = (
  props?:
    | {
        duration?: string | undefined;
        exitTranslateX?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideOutToLeft: SlideOutToLeft = (props) =>
  deepmerge.all<StyleRule>([
    exitBase(props?.duration),
    {
      vars: {
        [exitTranslateX]: `-${props?.exitTranslateX ?? "100%"}`,
      },
    },
  ]);

type SlideOutToRight = (
  props?:
    | {
        duration?: string | undefined;
        exitTranslateX?: string | undefined;
      }
    | undefined
) => StyleRule;
export const slideOutToRight: SlideOutToRight = (props) =>
  deepmerge.all<StyleRule>([
    exitBase(props?.duration),
    {
      vars: {
        [exitTranslateX]: props?.exitTranslateX ?? "100%",
      },
    },
  ]);
