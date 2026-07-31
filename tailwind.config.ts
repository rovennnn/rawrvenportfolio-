import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12151A",
        paper: "#EEF0EC",
        signal: {
          light: "#2F8768",
          dark: "#57C29A",
        },
        line: {
          light: "rgba(18,21,26,0.12)",
          dark: "rgba(231,234,230,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
