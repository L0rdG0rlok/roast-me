/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": {
          light: "#32799d",
          default: "#005885",
          dark: "#00466a",
        },
        primary: {
          light: "#ffc59f",
          default: "#ffb788",
          dark: "#cc926c",
        },
        secondary: {
          light: "#93bbda",
          default: "#76a9do",
          dark: "#3f84b8",
        },
      },
    },
  },
  plugins: [],
};
