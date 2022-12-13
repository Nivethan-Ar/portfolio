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
      },
      keyframes: {
        textGradient: {
          '0%, 100%': {
            'background-size': '250% 250%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '250% 250%',
            'background-position': 'right center'
          }
        }
      },
      animation: {
        textGradient: 'textGradient 6s ease infinite'
      }

    }
  },
  plugins: [],
}
