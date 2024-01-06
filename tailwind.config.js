/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sLaptop:{'max':'1440px'},
      lLaptop:'1441px',
      sDevices:{'max':'700px'},
      sScreens:{'max':'500px'},
      mobiles:{'max':'400px'},
    },
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

