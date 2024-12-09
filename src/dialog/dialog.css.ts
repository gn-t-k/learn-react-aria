import { tokens } from "../styles/theme.css";
import {
  slideInFromLeft,
  slideInFromTop,
  slideOutToLeft,
  slideOutToTop,
} from "../styles/rules/slide.css";
import { fadeIn, fadeOut } from "../styles/rules/fade.css";
import { style, StyleRule } from "@vanilla-extract/css";
import { zoomIn, zoomOut } from "../styles/rules/zoom.css";
import deepmerge from "deepmerge";
import { stack } from "../styles/rules/stack.css";
import { center } from "../styles/rules/center.css";

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
  display: "grid",
  height: "100%",
  gap: tokens.spacing[4],
  outline: "none",
});

export const dialogContentModal = style({
  position: "fixed",
  left: "50vw",
  top: "50vh",
  zIndex: 50,
  width: "100%",
  maxWidth: tokens.maxWidth.lg,
  transform: "translate(-50%, -50%)",
  border: `1px solid ${tokens.color.border}`,
  color: tokens.color.foreground,
  backgroundColor: tokens.color.background,
  padding: tokens.spacing[6],
  boxShadow: tokens.boxShadow.lg,
  gap: tokens.spacing[4],
  "@media": {
    [`(min-width: 40rem)`]: {
      borderRadius: tokens.borderRadius.lg,
    },
    [`(min-width: 48rem)`]: {
      width: "100%",
    },
  },
  selectors: {
    "&[data-entering='true']": deepmerge.all<StyleRule>([
      fadeIn(),
      zoomIn(),
      slideInFromLeft({ enterTranslateX: "50%" }),
      slideInFromTop({ enterTranslateY: "48%" }),
    ]),
    "&[data-exiting='true']": deepmerge.all<StyleRule>([
      fadeOut(),
      zoomOut(),
      slideOutToLeft({ exitTranslateX: "50%" }),
      slideOutToTop({ exitTranslateY: "48%" }),
    ]),
  },
});

export const dialogCloseButton = style({
  position: "absolute",
  right: tokens.spacing[4],
  top: tokens.spacing[4],
  borderRadius: tokens.borderRadius.sm,
  opacity: 0.5,
  transition: "opacity 0.2s",
  selectors: {
    ['&[data-disabled="true"]']: {
      pointerEvents: "none",
    },
    ['&[data-entering="true"]']: {
      backgroundColor: tokens.color.accent,
      color: tokens.color.mutedForeground,
    },
    ['&[data-hovered="true"]']: {
      opacity: 1,
    },
    ['&[data-focused="true"]']: {
      outline: "none",
      boxShadow: `0 0 0 2px ${tokens.color["ringOffset"]}), 0 0 0 4px ${tokens.color.ring}`,
    },
  },
});

export const dialogCloseButtonIcon = style({
  ...tokens.composite.size[4],
});

export const dialogHeader = style({
  ...stack({ spaces: tokens.spacing["1.5"] }),
  ...center(),
  "@media": {
    [`(min-width: 40rem)`]: {
      textAlign: "left",
    },
  },
});

export const dialogFooter = style({
  ...stack({ spaces: tokens.spacing[2], reverse: true }),
  "@media": {
    ["(min-width: 40rem)"]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: tokens.spacing[2],
    },
  },
});

export const dialogTitle = style({
  ...tokens.composite.text.lg,
  fontWeight: tokens.fontWeight.semibold,
});

export const dialogDescription = style({
  ...stack({ spaces: tokens.spacing["1.5"] }),
  ...center(),
  "@media": {
    [`(min-width: 40rem)`]: {
      textAlign: "left",
    },
  },
});
