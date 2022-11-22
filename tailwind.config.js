/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        daniel: ["Daniel", "cursive"],
        danielbd: ["Danielbd", "cursive"],
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(10rem, 1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
