import type { StyleRule } from "@vanilla-extract/css";
import { enterOpacity, exitOpacity } from "../vars.css";
import deepmerge from "deepmerge";
import { enterBase } from "./enter-base.css";
import { exitBase } from "./exit-base.css";

type FadeIn = (props?: {
  duration?: string | undefined;
  enterOpacity?: string | undefined;
}) => StyleRule;
export const fadeIn: FadeIn = (props) =>
  deepmerge.all<StyleRule>([
    enterBase(),
    {
      vars: {
        [enterOpacity]: props?.enterOpacity ?? "0%",
      },
    },
  ]);

type FadeOut = (props?: {
  duration?: string | undefined;
  exitOpacity?: string | undefined;
}) => StyleRule;
export const fadeOut: FadeOut = (props) =>
  deepmerge.all<StyleRule>([
    exitBase(),
    {
      vars: {
        [exitOpacity]: props?.exitOpacity ?? "0%",
      },
    },
  ]);
