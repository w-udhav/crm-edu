/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: "#B2A4FF",
        p2: "#FFB4B4",
        p3: "#FFDEB4",
        p4: "#FDF7C3",

        white: "#F2F3F5", // ! override

        "black-1": "#313338",
      },
    },
  },
  plugins: [],
};
