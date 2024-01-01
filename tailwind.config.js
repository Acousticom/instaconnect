/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#8b5cf6",
        lightPurple:"#d8b4fe",
        isactiveColor:"#dfe3ed"
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

