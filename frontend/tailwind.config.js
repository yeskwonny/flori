/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        customWhite: "#fffdfc",
        customBlack: "#1a1a1a",
        customYellow: "#FEEAA0",
      },
    },
  },
  plugins: [require("daisyui")],
};
