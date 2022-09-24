/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    colors: {
      french: "#7a6c5d",
      charcoal: "#2a3d45",
      almond: "#ddc9b4",
      khaki: "#bcac9b",
      "old-rose": "#c17c74",
    },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
    extend: {},
  },
  plugins: [],
};
