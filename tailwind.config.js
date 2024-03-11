/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF7A00",
          "base-100": "#fff8e8",
          success: "#a3be8c",
          error: "#bf616a",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#FF7A00",
      black: "#0d0d0d",
      white: "#FFF",
      gray: "#323232",
      red: "#FF5733",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
