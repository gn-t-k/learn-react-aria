import { StyleRule } from "@vanilla-extract/css";
import {
  exitOpacity,
  exitRotate,
  exitScale,
  exitTranslateX,
  exitTranslateY,
} from "../../styles/vars.css";
import { exit } from "../keyframes/exit.css";

type ExitBase = (duration?: string | undefined) => StyleRule;
export const exitBase: ExitBase = (duration = "0.3s") => ({
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
