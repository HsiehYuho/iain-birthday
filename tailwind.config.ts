import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdf8f0",
          100: "#f9edd9",
          200: "#f2d9b0",
          300: "#e8c080",
          400: "#dda554",
          500: "#d4913a",
          600: "#c47a2e",
          700: "#a36028",
          800: "#844d27",
          900: "#6c4023",
        },
        ocean: {
          50: "#f0f9ff",
          100: "#dff1ff",
          200: "#b8e4ff",
          300: "#79d0ff",
          400: "#36b9fe",
          500: "#0a9eef",
          600: "#007ecd",
          700: "#0064a6",
          800: "#035589",
          900: "#094671",
        },
        coral: {
          50: "#fff5f2",
          100: "#ffe8e0",
          200: "#ffd4c5",
          300: "#ffb39c",
          400: "#ff8d6b",
          500: "#f66d45",
          600: "#e3522b",
          700: "#bf4020",
          800: "#9d371e",
          900: "#82321f",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
