/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-50": "#111F35",
        "primary-100": "#0A192F",
        "neon-50": "#5DEECE",
        "header-50": "#FFFFFF",
        "default-50": "#A2BFD8",
        "paragraph-50": "#112240",
      },
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1600px",
    },
  },
  plugins: [],
};
