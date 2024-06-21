/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./pages/*.{js,jsx}",
    "./componets/*.{js,jsx}"
  ],
  theme: {
    extend: {
    colors: {
      'primary': '#CF1434ff',
      'secondary': '#E4E7EDff',
      'abyedh': '#F3F4F7ff',
      'ak7el': '#000000ff',
      'dark': '#848484ff',
    },}
  },
  plugins: [],
}

