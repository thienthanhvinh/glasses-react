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
        'dark-text-primary': ,
        'dark-color' : '#4e4f50',
        'dark-secon-color': '#2d3436',
        'dark-third-color': '#3a3a3a',
        'dark-four-color' : '#242526',
        'dark-five-color' : '#3A3A3A',
        
      }
    },
  },
  plugins: [],
}
