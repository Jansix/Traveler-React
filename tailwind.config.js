/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        microsoft: ['"微軟正黑體"', "sans-serif"],
      },
      colors: {
        "TT-color": "#4F4F51",
      },
    },
  },
  plugins: [],
};
