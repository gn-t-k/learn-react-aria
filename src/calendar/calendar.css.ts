import { globalStyle, style } from "@vanilla-extract/css";
import { tokens } from "../styles/tokens.css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style({
  width: "fit-content",
});

export const headingWrapper = style({
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: tokens.spacing[1],
  padding: `${tokens.spacing[1]} 0 ${tokens.spacing[4]}`,
});

export const headingButton = style({
  ...tokens.composite.size[4],
});

export const heading = style({
  flexGrow: 1,
  textAlign: "center",
  ...tokens.composite.text.sm,
  fontWeight: tokens.fontWeight.medium,
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
  color: `hsl(${tokens.color.mutedForeground})`,
});

export const gridBody = style({});
globalStyle(`${gridBody} > tr > td`, {
  padding: "0",
});

export const cell = recipe({
  base: {
    position: "relative",
    display: "flex",
    ...tokens.composite.size[9],
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    ...tokens.composite.text.sm,
    fontWeight: tokens.fontWeight.normal,
    border: 0,
    backgroundColor: `hsl(${tokens.color.background})`,
    whiteSpace: "nowrap",
    borderRadius: tokens.borderRadius.sm,
    transition: "color 0.2s, background-color 0.2s",
    selectors: {
      "&[data-disabled='true']": {
        pointerEvents: "none",
        opacity: "0.5",
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px hsl(${tokens.color["ringOffset"]}), 0 0 0 4px hsl(${tokens.color.ring})`,
      },
      "&[data-hovered='true']": {
        backgroundColor: `hsl(${tokens.color.accent})`,
        color: `hsl(${tokens.color["accentForeground"]})`,
      },
    },
  },
  variants: {
    isDisabled: {
      true: {
        color: `hsl(${tokens.color.mutedForeground})`,
        opacity: 0.5,
      },
    },
    isSelected: {
      true: {
        backgroundColor: `hsl(${tokens.color.primary})`,
        color: `hsl(${tokens.color.primaryForeground})`,
        selectors: {
          "&:focus": {
            backgroundColor: `hsl(${tokens.color.primary})`,
            color: `hsl(${tokens.color.primaryForeground})`,
          },
          "&:hover": {
            backgroundColor: `hsl(${tokens.color.primary})`,
            color: `hsl(${tokens.color.primaryForeground})`,
          },
        },
      },
    },
  },
});
