import { globalStyle } from "@vanilla-extract/css";

// Reset styles
globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: "0 solid",
});

globalStyle("::after, ::before, ::backdrop, ::file-selector-button", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  border: "0 solid",
});

globalStyle("html, :host", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%", // Prevent font size adjustment after orientation changes in iOS
  tabSize: 4,
  fontFamily: `var(--default-font-family, ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji')`,
  fontFeatureSettings: "var(--default-font-feature-settings, normal)",
  fontVariationSettings: "var(--default-font-variation-settings, normal)",
  WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
  lineHeight: "inherit", // Inherit line-height from html
});

globalStyle("hr", {
  height: 0, // Add correct height in Firefox
  color: "inherit", // Correct inheritance of border color in Firefox
  borderTopWidth: "1px", // Reset default border style
});

globalStyle("abbr:where([title])", {
  textDecoration: "underline dotted",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "inherit",
});

globalStyle("b, strong", {
  fontWeight: "bolder",
});

globalStyle("code, kbd, samp, pre", {
  fontFamily: `var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace)`,
  fontFeatureSettings: "var(--default-mono-font-feature-settings, normal)",
  fontVariationSettings: "var(--default-mono-font-variation-settings, normal)",
  fontSize: "1em",
});

globalStyle("small", {
  fontSize: "80%",
});

globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", {
  bottom: "-0.25em",
});

globalStyle("sup", {
  top: "-0.5em",
});

globalStyle("table", {
  textIndent: 0, // Remove text indentation in Chrome and Safari
  borderColor: "inherit", // Correct border color inheritance
  borderCollapse: "collapse", // Remove gaps between table borders
});

globalStyle(
  "button, input, optgroup, select, textarea, ::file-selector-button",
  {
    font: "inherit",
    fontFeatureSettings: "inherit",
    fontVariationSettings: "inherit",
    letterSpacing: "inherit",
    color: "inherit",
  }
);

globalStyle(
  'button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button',
  {
    background: "transparent",
    appearance: "button",
  }
);

globalStyle(":-moz-focusring", {
  outline: "auto",
});

globalStyle(":-moz-ui-invalid", {
  boxShadow: "none",
});

globalStyle("progress", {
  verticalAlign: "baseline",
});

globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

globalStyle("::-webkit-search-decoration", {
  WebkitAppearance: "none",
});

globalStyle("::-webkit-date-and-time-value", {
  minHeight: "1lh",
  textAlign: "inherit",
});

globalStyle("::-webkit-datetime-edit", {
  display: "inline-flex",
});

globalStyle("::-webkit-datetime-edit-fields-wrapper", {
  padding: 0,
});

globalStyle(
  "::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field",
  {
    paddingBlock: 0,
  }
);

globalStyle("summary", {
  display: "list-item",
});

globalStyle("ol, ul, menu", {
  listStyle: "none",
});

globalStyle("textarea", {
  resize: "vertical",
});

globalStyle("::placeholder", {
  opacity: 1,
  color: "color-mix(in oklch, currentColor 50%, transparent)",
});

globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
  verticalAlign: "middle",
});

globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

globalStyle('[hidden]:where(:not([hidden="until-found"]))', {
  display: "none !important",
});
