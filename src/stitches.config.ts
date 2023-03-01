import { createStitches, CSS } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Neutral
      black: "#000000",
      white: "#FFFFFF",
      // Primary
      primary900: "#0099CC",
      primary800: "#00BFFF",
      primary700: "#4CD2FF",
      // Secondary
      secondaryAlert: "#CC3100",
      secondaryInformation: "#4BA3C1",
      secondaryGeneric: "#B8B8B8",
      // Shades
      shade900: "#171717",
      shade850: "#222222",
      shade800: "#484848",
      shade700: "#676767",
      shade600: "#979797",
      shade500: "#B8B8B8",
    },
    space: {
      1: "6px",
      2: "10px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "32px",
      7: "40px",
      8: "80px",
    },
    radii: {
      small: "3px",
      medium: "5px",
      large: "8px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "25px",
      5: "31.25px",
      6: "39.06px",
      7: "48.83px",
    },
  },
  media: {
    bp1: "(max-width: 480px)",
    bp2: "(min-width: 780px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1200px)",
  },
  utils: {
    isDebug(color: string) {
      return {
        border: `1px solid ${color}`,
      };
    },
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    color: "$white",
    backgroundColor: "$shade900",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
});

export type CSSType = CSS<typeof config>;
