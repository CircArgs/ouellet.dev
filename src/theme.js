import chroma from "chroma-js";
import { css } from "styled-components";
import { Redirect } from "react-router-dom";

const theme = {
  global: {
    colors: {
      icon: {
        "0": "#",
        "1": "6",
        "2": "6",
        "3": "6",
        "4": "6",
        "5": "6",
        "6": "6",
        dark: "#f8f8f8",
        light: "#666666",
      },
      active: "rgba(221,221,221,0.5)",
      "background-back": { dark: "#111111", light: "#EEEEEE" },
      "background-main": {
        dark: chroma("#111111").brighten(2),
        light: chroma("#EEEEEE").darken(2),
      },
      "background-front": { dark: "#222222", light: "#FFFFFF" },
      "background-contrast": { dark: "#FFFFFF11", light: "#11111111" },
      "active-background": "background-contrast",
      "active-text": "text-strong",
      black: "#000000",
      border: { dark: "#444444", light: "#CCCCCC" },
      "brand-dark": "#fff",
      "brand-light": "#000",
      brand: {
        "0": "#",
        "1": "7",
        "2": "D",
        "3": "4",
        "4": "C",
        "5": "D",
        "6": "B",
        dark: "#fff",
        light: "#000",
      },
      control: "brand",
      focus: "accent-1",
      placeholder: "#AAAAAA",
      selected: "brand",
      text: { dark: "#EEEEEE", light: "#333333" },
      "text-strong": { dark: "#FFFFFF", light: "#000000" },
      "text-weak": { dark: "#CCCCCC", light: "#444444" },
      "text-xweak": { dark: "#999999", light: "#666666" },
      "selected-background": "brand",
      "selected-text": "text-strong",
      white: "#FFFFFF",
      "accent-1": "rgb(255, 255, 80)",
      "accent-2": "#a9c997",
      "accent-3": "#ca40a0",
      "accent-4": "#FFCA58",
      "dark-1": "#333333",
      "dark-2": "#555555",
      "dark-3": "#777777",
      "dark-4": "#999999",
      "dark-5": "#999999",
      "dark-6": "#999999",
      "light-1": "#F8F8F8",
      "light-2": "#F2F2F2",
      "light-3": "#EDEDED",
      "light-4": "#DADADA",
      "light-5": "#DADADA",
      "light-6": "#DADADA",
      "neutral-1": "#00873D",
      "neutral-2": "#3D138D",
      "neutral-3": "#00739D",
      "neutral-4": "#A2423D",
      "status-critical": "#FF4040",
      "status-error": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      background: { dark: "#111111", light: "#FFFFFF" },
      "graph-0": "brand",
      "graph-1": "status-warning",
    },
    active: { background: "active-background", color: "active-text" },
    animation: { duration: "1s", jiggle: { duration: "0.1s" } },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "4px",
      large: "12px",
      xlarge: "24px",
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "4px",
          large: "6px",
          xlarge: "12px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "3px",
          small: "6px",
          medium: "12px",
          large: "24px",
          xlarge: "48px",
        },
        size: {
          xxsmall: "24px",
          xsmall: "48px",
          small: "96px",
          medium: "192px",
          large: "384px",
          xlarge: "768px",
          full: "100%",
        },
      },
      medium: { value: 1536 },
      large: {},
    },
    deviceBreakpoints: { phone: "small", tablet: "medium", computer: "large" },
    control: {
      border: { width: "1px", radius: "0px", color: "border" },
      disabled: { opacity: 0.3 },
    },
    debounceDelay: 300,
    drop: {
      background: "#ffffff",
      border: { radius: "0px" },
      shadowSize: "small",
      zIndex: "20",
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "6px",
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px",
      responsiveBreakpoint: "small",
    },
    elevation: {
      light: {
        none: "none",
        xsmall: "0px 0px 1px 2px rgba(0, 0, 0, 0.20)",
        small: "0px 0px 2px 4px rgba(0, 0, 0, 0.20)",
        medium: "0px 0px 4px 8px rgba(0, 0, 0, 0.20)",
        large: "0px 0px 8px 16px rgba(0, 0, 0, 0.20)",
        xlarge: "0px 0px 12px 24px rgba(0, 0, 0, 0.20)",
        rain: "5px 10px rgba(0, 0, 0, 0.20)",
        wide: "0px 0px 80px 12px rgba(0, 0, 0, 0.20)",
        wideMed: "0px 0px 15px 15px rgba(0, 0, 0, 0.2)",
        hf:
          "0px 12px 24px rgba(0, 0, 0, 0.20), 0px -12px 24px rgba(0, 0, 0, 0.20)",
      },
      dark: {
        none: "none",
        xsmall: "0px 0px 2px 2px rgba(255, 255, 255, 0.40)",
        small: "0px 0px 4px 4px rgba(255, 255, 255, 0.40)",
        medium: "0px 0px 6px 8px rgba(255, 255, 255, 0.40)",
        large: "0px 0px 8px 16px rgba(255, 255, 255, 0.40)",
        xlarge: "0px 0px 12px 24px rgba(255, 255, 255, 0.40)",
        wide: "0px 0px 80px 12px rgba(255, 255, 255, 0.40)",
        wideMed: "0px 0px 15px 15px rgba(255, 255, 255, 0.20)",
        rain: "5px 10px rgba(255, 255, 255, 0.40)",
        hf:
          "0px 24px 48px rgba(255, 255, 255, 0.40), 0px -24px 48px rgba(255, 255, 255, 0.40)",
      },
    },
    focus: { border: { color: "focus" } },
    font: {
      size: "1.8rem",
      height: "2.4rem",
      maxWidth: "43.2rem",
      family:
        '"Lato", "Roboto", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
    },
    hover: { background: "active-background", color: "active-text" },
    input: { padding: "12px", weight: 600 },
    opacity: { strong: 0.8, medium: 0.4, weak: 0.1 },
    selected: { background: "selected-background", color: "selected-text" },
    spacing: "2.4rem",
    size: {
      xxsmall: "4.8rem",
      xsmall: "9.6rem",
      small: "19.2rem",
      medium: "38.4rem",
      large: "76.8rem",
      xlarge: "115.2rem",
      xxlarge: "153.6rem",
      full: "100%",
    },
    logoFont: "Bungee Shade",
  },
  icon: {
    size: {
      small: "1.2rem",
      medium: "2.4rem",
      large: "4.8rem",
      xlarge: "9.6rem",
    },
  },

  accordion: {
    border: { side: "bottom", color: "border" },
    heading: { level: "4" },
  },
  anchor: {
    textDecoration: "none",
    fontWeight: 600,
    color: { dark: "accent-1", light: "brand" },
    hover: { textDecoration: "underline" },
  },
  box: { responsiveBreakpoint: "small" },
  button: {
    border: { width: "2px", radius: "0px" },
    primary: {},
    padding: { vertical: "4px", horizontal: "22px" },
  },
  calendar: {
    small: {
      fontSize: "14px",
      lineHeight: 1.375,
      daySize: "27.428571428571427px",
      slideDuration: "0.2s",
    },
    medium: {
      fontSize: "18px",
      lineHeight: 1.45,
      daySize: "54.857142857142854px",
      slideDuration: "0.5s",
    },
    large: {
      fontSize: "30px",
      lineHeight: 1.11,
      daySize: "109.71428571428571px",
      slideDuration: "0.8s",
    },

    heading: { level: "4" },
  },
  carousel: {
    animation: { duration: 0 },
    disabled: { icons: {} },
  },
  chart: { color: "accent-1" },
  checkBox: {
    border: {
      color: {
        dark: "rgba(255, 255, 255, 0.5)",
        light: "rgba(0, 0, 0, 0.15)",
      },
      width: "2px",
    },
    check: { radius: "0px", thickness: "4px" },
    hover: { border: { color: { dark: "white", light: "black" } } },
    icon: {},
    icons: {},
    size: "24px",
    toggle: {
      color: { dark: "#d9d9d9", light: "#d9d9d9" },
      knob: {},
      radius: "0px",
      size: "48px",
    },
  },
  clock: {
    analog: {
      hour: {
        color: { dark: "light-2", light: "dark-3" },
        width: "8px",
        size: "24px",
        shape: "round",
      },
      minute: {
        color: { dark: "light-4", light: "dark-3" },
        width: "4px",
        size: "12px",
        shape: "round",
      },
      second: {
        color: { dark: "accent-1", light: "accent-1" },
        width: "3px",
        size: "9px",
        shape: "round",
      },
      size: {
        small: "72px",
        medium: "96px",
        large: "144px",
        xlarge: "216px",
        huge: "288px",
      },
    },
    digital: {
      text: {
        xsmall: { size: "10px", height: 1.5 },
        small: { size: "14px", height: 1.43 },
        medium: { size: "18px", height: 1.375 },
        large: { size: "22px", height: 1.167 },
        xlarge: { size: "26px", height: 1.1875 },
        xxlarge: { size: "34px", height: 1.125 },
      },
    },
  },
  collapsible: { minSpeed: 200, baseline: 500 },
  dataTable: {
    groupHeader: {
      background: { dark: "dark-2", light: "light-2" },
      border: { side: "bottom", size: "xsmall" },
      pad: { horizontal: "small", vertical: "xsmall" },
    },
    groupEnd: { border: { side: "bottom", size: "xsmall" } },
    header: {},
    primary: { weight: "bold" },
    resize: { border: { color: "border", side: "end" } },
  },
  diagram: { line: { color: "accent-1" } },
  formField: {
    border: {
      color: "brand",
      error: { color: { dark: "white", light: "status-critical" } },
      position: "inner",
      side: "bottom",
    },
    content: { pad: "small" },
    disabled: { background: { color: "status-disabled", opacity: "medium" } },
    error: {
      color: {
        "0": "s",
        "1": "t",
        "2": "a",
        "3": "t",
        "4": "u",
        "5": "s",
        "6": "-",
        "7": "c",
        "8": "r",
        "9": "i",
        "10": "t",
        "11": "i",
        "12": "c",
        "13": "a",
        "14": "l",
        dark: "status-critical",
        light: "status-critical",
      },
      margin: { vertical: "xsmall", horizontal: "small" },
    },
    help: {
      color: {
        "0": "d",
        "1": "a",
        "2": "r",
        "3": "k",
        "4": "-",
        "5": "3",
        dark: "dark-3",
        light: "dark-3",
      },
      margin: { start: "small" },
    },
    info: {
      color: "text-xweak",
      margin: { vertical: "xsmall", horizontal: "small" },
    },
    label: { margin: { vertical: "xsmall", horizontal: "small" } },
    margin: { bottom: "small" },
    round: "0px",
  },
  grommet: {},

  heading: {
    font: {},
    level: {
      "1": {
        font: {},
        small: { size: "3.4rem", height: "4.0rem", maxWidth: "81.6rem" },
        medium: { size: "5.0rem", height: "5.6rem", maxWidth: "120.0rem" },
        large: { size: "8.2rem", height: "8.8rem", maxWidth: "196.8rem" },
        xlarge: { size: "11.4rem", height: "12.0rem", maxWidth: "273.6rem" },
      },
      "2": {
        font: {},
        small: { size: "2.6rem", height: "3.2rem", maxWidth: "62.4rem" },
        medium: { size: "3.4rem", height: "4.0rem", maxWidth: "81.6rem" },
        large: { size: "5.0rem", height: "5.6rem", maxWidth: "120.0rem" },
        xlarge: { size: "6.6rem", height: "7.2rem", maxWidth: "158.4rem" },
      },
      "3": {
        font: {},
        small: { size: "2.2rem", height: "2.8rem", maxWidth: "52.8rem" },
        medium: { size: "2.6rem", height: "3.2rem", maxWidth: "62.4rem" },
        large: { size: "3.4rem", height: "4.0rem", maxWidth: "81.6rem" },
        xlarge: { size: "4.2rem", height: "4.8rem", maxWidth: "100.8rem" },
      },
      "4": {
        font: {},
        small: { size: "1.8rem", height: "2.4rem", maxWidth: "43.2rem" },
        medium: { size: "1.8rem", height: "2.4rem", maxWidth: "43.2rem" },
        large: { size: "1.8rem", height: "2.4rem", maxWidth: "43.2rem" },
        xlarge: { size: "1.8rem", height: "2.4rem", maxWidth: "43.2rem" },
      },
      "5": {
        font: {},
        small: { size: "1.6rem", height: "2.2rem", maxWidth: "38.4rem" },
        medium: { size: "1.6rem", height: "2.2rem", maxWidth: "38.4rem" },
        large: { size: "1.6rem", height: "2.2rem", maxWidth: "38.4rem" },
        xlarge: { size: "1.6rem", height: "2.2rem", maxWidth: "38.4rem" },
      },
      "6": {
        font: {},
        small: { size: "1.4rem", height: "2.0rem", maxWidth: "33.6rem" },
        medium: { size: "1.4rem", height: "2.0rem", maxWidth: "33.6rem" },
        large: { size: "1.4rem", height: "2.0rem", maxWidth: "33.6rem" },
        xlarge: { size: "1.4rem", height: "2.0rem", maxWidth: "33.6rem" },
      },
    },
    responsiveBreakpoint: "small",
    weight: 600,
  },
  layer: {
    background: {
      "0": "w",
      "1": "h",
      "2": "i",
      "3": "t",
      "4": "e",
      dark: "#111111",
      light: "#FFFFFF",
    },
    border: { radius: "0px" },
    container: { zIndex: "15" },
    overlay: { background: "rgba(0, 0, 0, 0.5)" },
    responsiveBreakpoint: "small",
    zIndex: "10",
  },
  list: {
    item: {
      border: "horizontal",
      pad: { horizontal: "medium", vertical: "small" },
    },
  },
  maskedInput: {},
  meter: { color: "accent-1" },
  paragraph: {
    small: { size: "1.4rem", height: "2.0rem", maxWidth: "33.6rem" },
    medium: { size: "1.8rem", height: "2.4rem", maxWidth: "43.2rem" },
    large: { size: "2.2rem", height: "2.8rem", maxWidth: "52.8rem" },
    xlarge: { size: "2.6rem", height: "3.2rem", maxWidth: "62.4rem" },
    xxlarge: { size: "3.4rem", height: "4.0rem", maxWidth: "81.6rem" },
  },
  radioButton: {
    border: {
      color: {
        dark: "rgba(255, 255, 255, 0.5)",
        light: "rgba(0, 0, 0, 0.15)",
      },
      width: "2px",
    },
    check: { radius: "0px" },
    hover: { border: { color: { dark: "white", light: "black" } } },
    icon: {},
    icons: {},
    gap: "small",
    size: "24px",
  },
  rangeInput: {
    track: {
      height: "4px",
    },
    thumb: {},
  },
  rangeSelector: { background: { invert: { color: "light-4" } } },
  select: {
    container: {},
    control: {},
    options: {
      container: { align: "start", pad: "small" },
      text: { margin: "none" },
    },
    step: 20,
  },
  tab: {
    active: { color: "text" },
    border: {
      side: "bottom",
      size: "small",
      color: { dark: "accent-1", light: "brand" },
      active: { color: { dark: "white", light: "black" } },
      hover: { color: { dark: "white", light: "black" } },
    },
    color: "control",
    hover: { color: { dark: "white", light: "black" } },
    margin: { vertical: "xxsmall", horizontal: "small" },
    pad: { bottom: "xsmall" },
  },
  tabs: { header: {}, panel: {} },
  table: {
    header: {
      align: "start",
      pad: { horizontal: "small", vertical: "xsmall" },
      border: "bottom",
    },
    body: {
      align: "start",
      pad: { horizontal: "small", vertical: "xsmall" },
    },
    footer: {
      align: "start",
      pad: { horizontal: "small", vertical: "xsmall" },
      border: "top",
    },
  },
  text: {
    xsmall: { size: "1.2rem", height: "1.8rem", maxWidth: "28.8rem" },
    small: { size: "1.4rem", height: "2.0rem", maxWidth: "33.6rem" },
    medium: { size: "1.8rem", height: "2.4rem", maxWidth: "43.2rem" },
    large: { size: "2.2rem", height: "2.8rem", maxWidth: "52.8rem" },
    xlarge: { size: "2.6rem", height: "3.2rem", maxWidth: "62.4rem" },
    xxlarge: { size: "3.4rem", height: "4.0rem", maxWidth: "81.6rem" },
  },
  textArea: {},
  textInput: {},
  video: {
    captions: { background: "rgba(0, 0, 0, 0.7)" },
    scrubber: { color: "light-4" },
  },
  worldMap: {
    color: "light-3",
    continent: { active: "8px", base: "6px" },
    hover: { color: "light-4" },
    place: { active: "20px", base: "8px" },
  },
  name: "lluvia theme",
  rounding: 0,
  spacing: 24,
  defaultMode: "light",
  breakpoints: {
    small: {
      value: 450,
      borderSize: {
        xsmall: "1px",
        small: "2px",
        medium: "0.4rem",
        large: "0.6rem",
        xlarge: "1.2rem",
      },
      edgeSize: {
        none: "0px",
        hair: "1px",
        xxsmall: "2px",
        xsmall: "0.3rem",
        small: "0.6rem",
        medium: "1.2rem",
        large: "2.4rem",
        xlarge: "4.8rem",
      },
      size: {
        xxsmall: "2.4rem",
        xsmall: "4.8rem",
        small: "9.6rem",
        medium: "19.2rem",
        large: "38.4rem",
        xlarge: "76.8rem",

        full: "100%",
      },
    },
    medium: { value: 800 },
    large: { value: 1000 },
    xlarge: { value: 1300.008 },
    xxlarge: { value: 1600.008 },
  },
};

theme.heading.extend = `
text-shadow: none;
transition: all 1s ease-in-out;
&:hover{  
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px ${theme.global.colors.active}, 0 0 40px ${theme.global.colors.active}, 0 0 50px ${theme.global.colors.active}, 0 0 60px ${theme.global.colors.active}, 0 0 70px ${theme.global.colors.active}
}

`;

theme.global.elevation.dark["accent-1"] = theme.global.elevation.light[
  "accent-1"
] = "0px 0px 18px 24px " + theme.global.colors["accent-1"];

theme.media = {};
Object.keys(theme.breakpoints).map((bp) => {
  theme.media[bp] = (...args) => css`
    @media only screen and (max-width: ${theme.breakpoints[bp].value / 16}em) {
      ${css(...args)}
    }
  `;
});

theme.media.min = {};
Object.keys(theme.breakpoints).map((bp) => {
  theme.media.min[bp] = (...args) => css`
    @media only screen and (min-width: ${theme.breakpoints[bp].value / 16}em) {
      ${css(...args)}
    }
  `;
});

const invert = (obj, name) => {
  if (typeof obj === "string" && !!theme.global.colors[obj]) {
    invert(theme.global.colors[obj]);
  } else {
    theme.global.colors[`${name}-invert`] = {
      light: obj.dark,
      dark: obj.light,
    };
  }
};

Object.keys(theme.global.colors).map((c) => invert(theme.global.colors[c], c));

export default theme;
