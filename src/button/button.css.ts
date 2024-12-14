import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { tokens } from "../styles/theme.css";
import { center } from "../styles/rules/center.css";
import { text } from "../styles/rules/text.css";

export const button = recipe({
  base: {
    border: 0,
    color: tokens.color.foreground,
    backgroundColor: tokens.color.background,
    ...center(),
    whiteSpace: "nowrap",
    borderRadius: tokens.borderRadius.sm,
    ...text({ size: "sm" }),
    fontWeight: tokens.fontWeight.medium,
    transition: "color 0.2s, background-color 0.2s",
    position: "relative",
    selectors: {
      "&[data-disabled='true']": {
        pointerEvents: "none",
        opacity: "0.5",
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 2px ${tokens.color["ringOffset"]}), 0 0 0 4px ${tokens.color.ring}`,
      },
    },
  },
  variants: {
    variant: {
      default: {
        backgroundColor: tokens.color.primary,
        color: tokens.color.primaryForeground,
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: tokens.color.primaryHovered,
          },
        },
      },
      destructive: {
        backgroundColor: tokens.color.destructive,
        color: tokens.color.destructiveForeground,
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: tokens.color.destructiveHovered,
          },
        },
      },
      outline: {
        border: `1px solid ${tokens.color.input}`,
        backgroundColor: tokens.color.background,
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: tokens.color.accent,
          },
        },
      },
      secondary: {
        backgroundColor: tokens.color.secondary,
        color: tokens.color.secondaryForeground,
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: tokens.color.secondaryHovered,
          },
        },
      },
      ghost: {
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: tokens.color.accent,
          },
        },
      },
      link: {
        color: tokens.color.primary,
        selectors: {
          "&[data-hovered='true']": {
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          },
        },
      },
    },
    size: {
      default: {
        height: "2.5rem",
        padding: `0 ${tokens.spacing[4]}`,
      },
      sm: {
        height: "2.25rem",
        borderRadius: tokens.borderRadius.md,
        padding: `0 ${tokens.spacing[3]}`,
      },
      lg: {
        height: "2.75rem",
        borderRadius: tokens.borderRadius.md,
        padding: `0 ${tokens.spacing[8]}`,
      },
      icon: {
        height: "2.5rem",
        width: "2.5rem",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
