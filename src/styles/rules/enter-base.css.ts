import { StyleRule } from "@vanilla-extract/css";
import {
  enterOpacity,
  enterRotate,
  enterScale,
  enterTranslateX,
  enterTranslateY,
} from "../../styles/vars.css";
import { enter } from "../../styles/keyframes/enter.css";

type EnterBase = (duration?: string | undefined) => StyleRule;
export const enterBase: EnterBase = (duration = "0.2s") => ({
  animationName: enter,
  animationDuration: duration,
  animationTimingFunction: "ease-in-out",
  vars: {
    [enterOpacity]: "initial",
    [enterScale]: "initial",
    [enterRotate]: "initial",
    [enterTranslateX]: "initial",
    [enterTranslateY]: "initial",
  },
});
