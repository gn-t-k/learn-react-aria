import { tokens } from "../styles/tokens.css";
import {
  slideInFromLeft,
  slideInFromTop,
  slideOutToLeft,
  slideOutToTop,
} from "../styles/rules/slide.css";
import { fadeIn, fadeOut } from "../styles/rules/fade.css";
import { style } from "@vanilla-extract/css";
import { zoomIn, zoomOut } from "../styles/rules/zoom.css";

export const dialogOverlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 50,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  selectors: {
    '&[data-entering="true"]': {
      ...fadeIn(),
    },
    '&[data-exiting="true"]': {
      ...fadeOut(),
    },
  },
});

export const dialogContent = style({
  position: "fixed",
  left: "50vw",
  top: "50vh",
  zIndex: 50,
  width: "100%",
  maxWidth: tokens.maxWidth.lg,
  transform: "translate(-50%, -50%)",
  border: `1px solid hsl(${tokens.color.border})`,
  backgroundColor: `hsl(${tokens.color.background})`,
  padding: tokens.spacing[6],
  boxShadow: tokens.boxShadow.lg,
  gap: tokens.spacing[4],
  "@media": {
    [`(min-width: ${tokens.breakpoint.sm})`]: {
      borderRadius: tokens.borderRadius.lg,
    },
    [`(min-width: ${tokens.breakpoint.md})`]: {
      width: "100%",
    },
  },
  selectors: {
    "&[data-entering='true']": {
      ...fadeIn(),
      ...zoomIn(),
      ...slideInFromLeft({ enterTranslateX: "50%" }),
      ...slideInFromTop({ enterTranslateY: "48%" }),
    },
    "&[data-exiting='true']": {
      ...fadeOut(),
      ...zoomOut(),
      ...slideOutToLeft({ exitTranslateX: "50%" }),
      ...slideOutToTop({ exitTranslateY: "48%" }),
    },
  },
});

export const dialogCloseButton = style({
  position: "absolute",
  right: tokens.spacing[4],
  top: tokens.spacing[4],
  borderRadius: tokens.borderRadius.sm,
  opacity: 0.7,
});
