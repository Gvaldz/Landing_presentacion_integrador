/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#2c9c7b', 
          DEFAULT: '#1E7A5E', 
          dark: '#145541', 
        }
      }
    },
  },
  plugins: [],
}