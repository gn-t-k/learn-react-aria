import { fallbackVar, keyframes } from "@vanilla-extract/css";
import {
  enterOpacity,
  enterRotate,
  enterScale,
  enterTranslateX,
  enterTranslateY,
} from "../../styles/vars.css";

export const enter = keyframes({
  from: {
    opacity: fallbackVar(enterOpacity, "1"),
    transform: `
      translate3d(
        ${fallbackVar(enterTranslateX, "1")},
        ${fallbackVar(enterTranslateY, "0")},
        0
      )
      scale3d(
        ${fallbackVar(enterScale, "1")},
        ${fallbackVar(enterScale, "1")},
        ${fallbackVar(enterScale, "1")}
      )
      rotate(${fallbackVar(enterRotate, "0")})
    `,
  },
});
