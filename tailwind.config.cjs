/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mark: ['mark-pro'],
      circular: ['circular'],
      code: ['code']
    },
    extend: {
      colors: {
        main: {
          gray: '#c4c4c4'
        }
      }
    }
  },
  plugins: [],
}
