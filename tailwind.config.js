/** @type {import('tailwindcss').Config} */
export default {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors":{
        "purp":"#00F9B4",
        "bluu":"#0FF900",
        "redd":"#FBD208",
        "gen":"#6627be"
      },
      translate:{
        "0%":"0%",
        "100%":"-100%",
        "200%":"-200%"
      }
    },
  },
  plugins: [],
}

