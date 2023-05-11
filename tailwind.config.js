/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      "lg2":{max:'1623px'},
      "lg":{max:'1023px'},
      "tl":{max:'723px'}
    },
    extend: {
      backgroundImage: {
        'back': "url('./src/assets/images/bg.jpg')",
        'skills': "url('./src/assets/images/banner-bg.png')"
      }
    },
    colors:{
      'mint':'#B4F8C8',
      "gray":"#9E9E9E",
      "gold":"#9E9E9E",
      "red-500":"#f56565",
    }
  },
  plugins: [],
}

