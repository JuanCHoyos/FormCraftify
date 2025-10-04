const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}", "./node_modules/primeng/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#e8e8e8",
          100: "#d1d1d1",
          200: "#a3a3a3",
          300: "#767676",
          400: "#484848",
          500: "#1a1a1a",
          600: "#151515",
          700: "#101010",
          800: "#0a0a0a",
          900: "#050505",
        },
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        light: "#f6f8fc",
        "light-constrast": "#000000",
        "light-shade": "#d8dade",
        "light-tint": "#f7f9fc",

        primary: "#4f46e5",
        "primary-contrast": "#FFFFFF",
        "primary-shade": "#443dcc",
        "primary-tint": "#635bf0",
        "primary-selected": "#3a3fd933",

        success: "#3ab373",
        "success-contrast": "#FFFFFF",
        "success-shade": "#339e65",
        "success-tint": "#4ebb81",

        danger: "#cd3737",
        "danger-contrast": "#FFFFFF",
        "danger-shade": "#b43030",
        "danger-tint": "#d24b4b",

        warning: "#d1a82d",
        "warning-contrast": "#FFFFFF",
        "warning-shade": "#b89428",
        "warning-tint": "#d6b142",
      },
    }),
  ],
};
