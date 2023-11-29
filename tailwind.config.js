/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#9333ea",
        lightPurple:"#d8b4fe"
      },
      width: {
        700: "700px",
        580:"580px"
      },
      right:{
        200:"250px"
      }
    },
  },
  plugins: [],
}

