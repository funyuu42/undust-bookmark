module.exports = {
  content: [
    "./index.html",
    './popup.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '50%': '50%', // p-80% - should work
      },
      animation:{
        'fade-move': 'fadein 0.5s 1'
      },
      Keyframes:{
        fadein: {
          '0%':{transform: 'translateY(100px)',opacity:0},
          '100%':{transform: 'translateY(0px)',opacity:100}
        }
      }
    },
  },
  plugins: [],
}

