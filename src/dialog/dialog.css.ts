import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { tokens } from "../styles/tokens.css";
import { animateIn, animateOut } from "../styles/rules/animate.css";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideOutToBottom,
  slideOutToLeft,
  slideOutToRight,
  slideOutToTop,
} from "../styles/rules/slide.css";
import { fadeIn, fadeOut } from "../styles/rules/fade.css";
import { style } from "@vanilla-extract/css";

export const dialogOverlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  selectors: {
    '&[data-entering="true"]': {
      ...animateIn("0.5s"),
      ...fadeIn("0%"),
    },
    '&[data-exiting="true"]': {
      ...animateOut("0.3s"),
      ...fadeOut("0%"),
    },
  },
});

export const dialogContent = style({
  zIndex: 50,
  gap: tokens.spacing[4],
  backgroundColor: `hsl(${tokens.color.background})`,
  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s ease-in-out",
  selectors: {
    "&[data-entering='true']": {
      ...animateIn("0.5s"),
    },
    "&[data-exiting='true']": {
      ...animateOut("0.3s"),
    },
  },
});
