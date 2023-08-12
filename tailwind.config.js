/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          200: "#ffffffba",
          400: "#ffffff",
        },
        grey: {
          200: "#242422",
        },
        purple: {
          200: "#a88fac",
          400: "#5e548e",
          500: "#281442",
          600: "#1a1324",
        },
        black: {
          200: "#121212",
          400: "#000000",
        },
        accent: {
          pink: "#fc6666",
          grey: "#d2dbdb",
        },
      },
      fontFamily: {
        Rubik_Mono_One: ["Rubik_Mono_One"],
        Rubik: ["Rubik"],
        Work_Sans: ["Work_Sans"],
      },
    },
  },
  plugins: [],
};
