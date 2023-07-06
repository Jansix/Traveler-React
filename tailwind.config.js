/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // important: '#root',
  theme: {
    extend: {
      fontFamily: {
        microsoft: ['"微軟正黑體"', 'sans-serif'],
      },
      colors: {
        'TT-color': '#4F4F51',
        'bg-color': 'rgba(222, 165, 165, 0.9)',
        'nav-color': 'rgba(247, 246, 242,0.9)',
      },
    },
  },
  plugins: [],
};
