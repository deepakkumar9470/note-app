 /** @type {import('tailwindcss').Config} */


export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{ 
        mainBg: '#5095e4',
        lightWhite: '#FAFAFA',
        lightPrimary: 'rgba( 255, 255, 255, 0.3 )',
        cardWhite: 'rgba( 255, 255, 255, 0.95 )',
        cardShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
      }
    },
  },
  plugins: [],
}

