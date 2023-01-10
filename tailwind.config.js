/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7065d4",
        primary_disabled: "#9e98d4",
        grey: "#7e7d8c",
        error: "#d94c4a",
        success: "#5cb849",
        success_100: "#bcf0b1",
        warning: "#e6b05f",
        background: "#f5f5f9",
      },
      fontFamily: {
        main: ['"Mulish"', "sans-serif"],
        secondary: ['"Secular One"', "sans-serif"],
      },
      translate: {
        hide: "-100rem",
        show: "0rem",
      },
    },
  },
  plugins: [],
};
