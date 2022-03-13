export const theme = {
  fontFamily: {
    bold: "RobotoBold",
    regular: "RobotoRegular",
    light: "RobotoLight",
  },
  fontSize: {
    tiny: 10,
    xs: 12,
    h5: 14,
    base: 16,
    h4: 18,
    h3: 20,
    h2: 24,
    h1: 26,
    "4xl": 30,
    // "5xl": 48,
    // "6xl": 64,
    // "7xl": 80,
  },
  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  screens: {
    xs: "400px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  width: () => ({
    auto: "auto",
    full: "100%",
    // ...theme("spacing"),
    150: "150px",
    "1/6": "16%",
  }),

  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    grey: "#F4F0EF",
    darkGrey: "#8A8D90",
    text: "rgba(12,13,52,0.7)",

    gray: {
      100: "#f7fafc",
      200: "#edf2f7",
      300: "#e2e8f0",
      400: "#cbd5e0",
      500: "#a0aec0",
      600: "#718096",
      700: "#4a5568",
      800: "#2d3748",
      900: "#1a202c",
    },
    red: {
      100: "#fff5f5",
      200: "#fed7d7",
      300: "#feb2b2",
      400: "#fc8181",
      500: "#f56565",
      600: "#e53e3e",
      700: "#c53030",
      800: "#9b2c2c",
      900: "#742a2a",
    },
    orange: {
      100: "#fffaf0",
      200: "#feebc8",
      300: "#fbd38d",
      400: "#f6ad55",
      500: "#ed8936",
      600: "#dd6b20",
      700: "#c05621",
      800: "#9c4221",
      900: "#7b341e",
    },
    yellow: {
      100: "#fffff0",
      200: "#fefcbf",
      300: "#faf089",
      400: "#f6e05e",
      500: "#ecc94b",
      600: "#d69e2e",
      700: "#b7791f",
      800: "#975a16",
      900: "#744210",
    },
    green: {
      100: "#f0fff4",
      200: "#c6f6d5",
      300: "#9ae6b4",
      400: "#68d391",
      500: "#48bb78",
      600: "#38a169",
      700: "#2f855a",
      800: "#276749",
      900: "#22543d",
    },
    teal: {
      100: "#e6fffa",
      200: "#b2f5ea",
      300: "#81e6d9",
      400: "#4fd1c5",
      500: "#38b2ac",
      600: "#319795",
      700: "#2c7a7b",
      800: "#285e61",
      900: "#234e52",
    },
    blue: {
      100: "#ebf8ff",
      200: "#bee3f8",
      300: "#90cdf4",
      400: "#63b3ed",
      500: "#4299e1",
      600: "#3182ce",
      700: "#2b6cb0",
      800: "#2c5282",
      900: "#2a4365",
    },
    indigo: {
      100: "#ebf4ff",
      200: "#c3dafe",
      300: "#a3bffa",
      400: "#7f9cf5",
      500: "#667eea",
      600: "#5a67d8",
      700: "#4c51bf",
      800: "#434190",
      900: "#3c366b",
    },
    purple: {
      100: "#faf5ff",
      200: "#e9d8fd",
      300: "#d6bcfa",
      400: "#b794f4",
      500: "#9f7aea",
      600: "#805ad5",
      700: "#6b46c1",
      800: "#553c9a",
      900: "#44337a",
    },
    pink: {
      100: "#fff5f7",
      200: "#fed7e2",
      300: "#fbb6ce",
      400: "#f687b3",
      500: "#ed64a6",
      600: "#d53f8c",
      700: "#b83280",
      800: "#97266d",
      900: "#702459",
    },
  },
  minWidth: {
    0: "0",
    full: "100%",
  },
  maxWidth: {
    none: "none",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "9/10": "89%",
    full: "100%",
    // ...breakpoints(theme("screens")),
  },
  spacing: {
    0: 0,
    0.5: 2.5,
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 30,
    6: 40,
    7: 60,
    8: 75,
    9: 80,
    "5l": 160,
    "n1/2": "-50%",
    24: 24,
  },
  borderWidth: {
    none: "0px",
    default: "1px",
    2: "2px",
  },
  translate: () => ({
    // ...theme("spacing"),
    // ...negative(theme("spacing")),
    "-full": "-100%",
    "-1/2": "-50%",
    "1/2": "50%",
    "11/12": "91%",
    full: "100%",
  }),

  borderRadius: {
    // ...theme("spacing"),
    5: 5,
    10: 10,
    50: 50,
    full: 999999,
  },
};