/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        //main 3 colors used in UI
        primary : "#FBFBFB",
        secondary : "#E8F9FF",
        accent : "#3674B5"
      }
    },
  },
  plugins: [],
}
