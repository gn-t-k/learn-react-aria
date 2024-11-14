import { fallbackVar, keyframes } from "@vanilla-extract/css";
import {
  exitOpacity,
  exitRotate,
  exitScale,
  exitTranslateX,
  exitTranslateY,
} from "../../styles/vars.css";

export const exit = keyframes({
  to: {
    opacity: fallbackVar(exitOpacity, "1"),
    transform: `
      translate3d(
        ${fallbackVar(exitTranslateX, "0")},
        ${fallbackVar(exitTranslateY, "0")},
        0
      )
      scale3d(
        ${fallbackVar(exitScale, "1")},
        ${fallbackVar(exitScale, "1")},
        ${fallbackVar(exitScale, "1")}
      )
      rotate(${fallbackVar(exitRotate, "0")})
    `,
  },
});
