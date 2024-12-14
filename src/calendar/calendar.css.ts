import { globalStyle, style } from "@vanilla-extract/css";
import { tokens } from "../styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";
import { center } from "../styles/rules/center.css";
import { cluster } from "../styles/rules/cluster.css";

export const wrapper = style({
  width: "fit-content",
});

export const headingWrapper = style({
  ...cluster({ spaces: tokens.spacing[1] }),
  padding: `${tokens.spacing[1]} 0 ${tokens.spacing[4]}`,
});

export const headingButtonIcon = style({
  ...tokens.composite.size[4],
});

export const heading = style({
  flex: 1,
  ...center(),
  ...tokens.composite.text.sm,
  fontWeight: tokens.fontWeight.medium,
  backgroundColor: tokens.color.background,
  color: tokens.color.foreground,
});

export const grid = style({
  borderCollapse: "separate",
  borderSpacing: tokens.spacing[1],
});

export const gridHeaderCell = style({
  width: tokens.width[8],
  borderRadius: tokens.borderRadius.md,
  ...tokens.composite.text.sm,
  fontWeight: tokens.fontWeight.normal,
  color: tokens.color.mutedForeground,
});

export const gridBody = style({});
globalStyle(`${gridBody} > tr > td`, {
  padding: "0",
});

export const cell = recipe({
  base: {
    border: 0,
    color: tokens.color.foreground,
    backgroundColor: tokens.color.background,
    ...center({ vertical: false }),
    whiteSpace: "nowrap",
    borderRadius: tokens.borderRadius.md,
    ...tokens.composite.text.sm,
    fontWeight: tokens.fontWeight.medium,
    transition: "color 0.2s, background-color 0.2s",
    position: "relative",
    ...tokens.composite.size[9],
    selectors: {
      "&:disabled": {
        pointerEvents: "none",
        color: tokens.color.mutedForeground,
        opacity: 0.5,
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px ${tokens.color["ringOffset"]}), 0 0 0 4px ${tokens.color.ring}`,
      },
      "&:hover": {
        backgroundColor: tokens.color.accent,
        color: tokens.color.accentForeground,
      },
    },
  },
  variants: {
    isToday: {
      true: {
        backgroundColor: tokens.color.accent,
        color: tokens.color.accentForeground,
      },
    },
    isSelected: {
      true: {
        backgroundColor: tokens.color.primary,
        color: tokens.color.primaryForeground,
        selectors: {
          "&:focus": {
            backgroundColor: tokens.color.primary,
            color: tokens.color.primaryForeground,
          },
          "&:hover": {
            backgroundColor: tokens.color.primary,
            color: tokens.color.primaryForeground,
          },
        },
      },
    },
    hasEvent: {
      true: {
        selectors: {
          "&::after": {
            content: "",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)",
            top: "75%",
            ...tokens.composite.size[2],
            borderRadius: tokens.borderRadius.full,
            backgroundColor: tokens.color.primary,
            color: tokens.color.primaryForeground,
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: { isSelected: true, hasEvent: true },
      style: {
        selectors: {
          "&::after": {
            backgroundColor: tokens.color.primaryForeground,
          },
        },
      },
    },
  ],
});
