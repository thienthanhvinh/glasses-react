/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#808191",
        secondary: "#2d3436",
        'dark-color' : '#4e4f50',
        'dark-secon-color': '#2d3436',
        'dark-third-color': '#3a3a3a',
        'dark-four-color' : '#18191A',
      }
    },
  },
  plugins: [],
}
