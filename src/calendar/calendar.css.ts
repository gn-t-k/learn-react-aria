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

export const headingButtonIcon = style({
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
    border: 0,
    backgroundColor: `hsl(${tokens.color.background})`,
    display: "inline-flex",
    justifyContent: "center",
    whiteSpace: "nowrap",
    borderRadius: tokens.borderRadius.md,
    ...tokens.composite.text.sm,
    fontWeight: tokens.fontWeight.medium,
    transition: "color 0.2s, background-color 0.2s",
    position: "relative",
    padding: `0 ${tokens.spacing[3]}`,
    ...tokens.composite.size[9],
    selectors: {
      "&:disabled": {
        pointerEvents: "none",
        color: `hsl(${tokens.color.mutedForeground})`,
        opacity: 0.5,
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px hsl(${tokens.color["ringOffset"]}), 0 0 0 4px hsl(${tokens.color.ring})`,
      },
      "&:hover": {
        backgroundColor: `hsl(${tokens.color.accent})`,
        color: `hsl(${tokens.color["accentForeground"]})`,
      },
    },
  },
  variants: {
    isToday: {
      true: {
        backgroundColor: `hsl(${tokens.color.accent})`,
        color: `hsl(${tokens.color["accentForeground"]})`,
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
            backgroundColor: `hsl(${tokens.color.primary})`,
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
            backgroundColor: `hsl(${tokens.color.primaryForeground})`,
          },
        },
      },
    },
  ],
});
