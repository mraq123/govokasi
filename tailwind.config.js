/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#00FF00",
        tertiary: "#ffffff",
        abu: "#ECECEC",
        ungu: "#703BE7",
        orange: "#FE846F",
        putih: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        prata: ["Prata", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        ht: "12px",
        ds: "32px",
        hh: "14px",
        hs: "11px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #F27121, #EE593B, #E94057, #AF3E9C, #703BE7)",
        "custom-gradient2":
          "linear-gradient(90deg, #6636D2, #6636D2, #4257E9, #2472FC)",
      },
      height: {
        150: "110vh",
      },
    },
  },
  plugins: [],
};
