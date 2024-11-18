import { tokens } from "../styles/tokens.css";
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
  border: `1px solid hsl(${tokens.color.border})`,
  backgroundColor: `hsl(${tokens.color.background})`,
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
  opacity: 0.7,
  transition: "opacity 0.2s",
  selectors: {
    ['&[data-disabled="true"]']: {
      pointerEvents: "none",
    },
    ['&[data-entering="true"]']: {
      backgroundColor: `hsl(${tokens.color.accent})`,
      color: `hsl(${tokens.color.mutedForeground})`,
    },
    ['&[data-hovered="true"]']: {
      opacity: 1,
    },
    ['&[data-focused="true"]']: {
      outline: "none",
      boxShadow: `0 0 0 2px hsl(${tokens.color["ringOffset"]}), 0 0 0 4px hsl(${tokens.color.ring})`,
    },
  },
});

export const dialogCloseButtonIcon = style({
  ...tokens.composite.size.icon,
});

export const dialogHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing["1.5"],
  textAlign: "center",
  "@media": {
    [`(min-width: 40rem)`]: {
      textAlign: "left",
    },
  },
});

export const dialogFooter = style({
  display: "flex",
  flexDirection: "column-reverse",
  "@media": {
    [`(min-width: 40rem)`]: {
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
  display: "flex",
  flexDirection: "column",
  gap: tokens.spacing["1.5"],
  textAlign: "center",
  "@media": {
    [`(min-width: 40rem)`]: {
      textAlign: "left",
    },
  },
});
