import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { tokens } from "../styles/tokens.css";

export const button = recipe({
  base: {
    border: 0,
    backgroundColor: `hsl(${tokens.color.background})`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    borderRadius: tokens.borderRadius.sm,
    ...tokens.composite.text.sm,
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
        boxShadow: `0 0 0 2px hsl(${tokens.color["ringOffset"]}), 0 0 0 4px hsl(${tokens.color.ring})`,
      },
    },
  },
  variants: {
    variant: {
      default: {
        backgroundColor: `hsl(${tokens.color.primary})`,
        color: `hsl(${tokens.color["primaryForeground"]})`,
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: `hsla(${tokens.color.primary}, 0.8)`,
          },
        },
      },
      destructive: {
        backgroundColor: `hsl(${tokens.color.destructive})`,
        color: `hsl(${tokens.color["destructiveForeground"]})`,
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: `hsla(${tokens.color.destructive}, 0.8)`,
          },
        },
      },
      outline: {
        border: `1px solid hsl(${tokens.color.input})`,
        backgroundColor: `hsl(${tokens.color.background})`,
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: `hsl(${tokens.color.accent})`,
            color: `hsl(${tokens.color["accentForeground"]})`,
          },
        },
      },
      secondary: {
        backgroundColor: `hsl(${tokens.color.secondary})`,
        color: `hsl(${tokens.color["secondaryForeground"]})`,
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: `hsla(${tokens.color.secondary}, 0.8)`,
          },
        },
      },
      ghost: {
        selectors: {
          "&[data-hovered='true']": {
            backgroundColor: `hsl(${tokens.color.accent})`,
            color: `hsl(${tokens.color["accentForeground"]})`,
          },
        },
      },
      link: {
        color: `hsl(${tokens.color.primary})`,
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
