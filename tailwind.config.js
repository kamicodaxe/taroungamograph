/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#58bcb6',
        // 'black': '#0a1514',
        'secondary': '#dde4ba',
        'water': '#5d8a82'
      },
    },
  },
  plugins: [],
}
