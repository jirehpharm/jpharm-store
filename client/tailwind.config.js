/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#071c1f",
        secondary: "#46CEB6;",
        danger: "#FF9494",
        light: "#657984",
        grayText: "#4F4D4D",
        sectionColor: "#F2F6F7",
        borderColor: "#E4ECF2",
      },
      backgroundColor: {
        background: "#f3f4f6",
      },
      boxShadow: {
        light: "0 1px 6px 0 rgba(32, 33, 36, .28);",
        medium: "0 16px 32px 0 rgba(7, 28, 31, 0.1)",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans KR", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("./plugins/tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
  ],
};
