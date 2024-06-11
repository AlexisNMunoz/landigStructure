/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Quicksand": ["Quicksand", "sans-serif"]
      },
      colors: {
        "primary": "#BA68C8"
      },
      backgroundImage: {
        "menu-open": 'url("/menu.png")',
        "menu-close": 'url("/menu-close.png")'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated')
  ],
}

