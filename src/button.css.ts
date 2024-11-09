import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionDuration: "150ms",
    outline: "none",
    boxShadow: "0 0 0 2px var(--ring-color)",
    pointerEvents: "none",
    opacity: "0.5",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "var(--primary)",
        color: "var(--primary-foreground)",
        transition: "background-color 0.3s",
        selectors: {
          "&:hover": {
            backgroundColor: "rgba(var(--primary), 0.9)",
          },
        },
      },
      destructive: {
        backgroundColor: "var(--destructive)",
        color: "var(--destructive-foreground)",
        transition: "background-color 0.3s",
        selectors: {
          "&:hover": {
            backgroundColor: "rgba(var(--destructive), 0.9)",
          },
        },
      },
      outline: {},
      secondary: {},
      ghost: {},
      link: {},
    },
    size: {
      default: {},
      sm: {},
      lg: {},
      icon: {},
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

// .outline {
//   border: 1px solid var(--input);
//   background-color: var(--background);
//   transition: background-color 0.3s, color 0.3s;
// }
// .outline:hover {
//   background-color: var(--accent);
//   color: var(--accent-foreground);
// }

// .secondary {
//   background-color: var(--secondary);
//   color: var(--secondary-foreground);
//   transition: background-color 0.3s;
// }
// .secondary:hover {
//   background-color: rgba(var(--secondary), 0.8);
// }

// .ghost {
//   transition: background-color 0.3s, color 0.3s;
// }
// .ghost:hover {
//   background-color: var(--accent);
//   color: var(--accent-foreground);
// }

// .link {
//   color: var(--primary);
//   text-decoration: underline;
//   text-underline-offset: 4px;
//   transition: text-decoration 0.3s;
// }
// .link:hover {
//   text-decoration: underline;
// }

// /* size styles */
// .default-size {
//   height: 40px;
//   padding: 8px 16px;
// }

// .sm {
//   height: 36px;
//   border-radius: 4px;
//   padding: 8px 12px;
// }

// .lg {
//   height: 44px;
//   border-radius: 4px;
//   padding: 8px 32px;
// }

// .icon {
//   width: 40px;
//   height: 40px;
// }
