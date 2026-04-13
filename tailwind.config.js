/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'magenta': '#DD3163',
        'vibrant-pink': '#FF6E97',
        'coral': '#FE546F',
        'lavender': '#E0AFFE',
        'pale-pink': '#FFA2BF',
        // Additional shades for gradients
        'magenta-dark': '#C02A4F',
        'magenta-light': '#E85A7F',
        'pink-light': '#FFB8D1',
      },
    },
  },
  plugins: [],
}
