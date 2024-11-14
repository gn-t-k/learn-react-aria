import { StyleRule } from "@vanilla-extract/css";
import {
  enterOpacity,
  enterRotate,
  enterScale,
  enterTranslateX,
  enterTranslateY,
  exitOpacity,
  exitRotate,
  exitScale,
  exitTranslateX,
  exitTranslateY,
} from "../../styles/vars.css";
import { enter } from "../../styles/keyframes/enter.css";
import { exit } from "../keyframes/exit.css";

type AnimateIn = (duration: string) => StyleRule;
export const animateIn: AnimateIn = (duration) => ({
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

type AnimateOut = (duration: string) => StyleRule;
export const animateOut: AnimateOut = (duration) => ({
  animationName: exit,
  animationDuration: duration,
  animationTimingFunction: "ease-in-out",
  vars: {
    [exitOpacity]: "initial",
    [exitScale]: "initial",
    [exitRotate]: "initial",
    [exitTranslateX]: "initial",
    [exitTranslateY]: "initial",
  },
});
