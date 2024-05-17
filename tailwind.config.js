/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgBlack:'#0c0f12'
      },
      spacing: {
        '7.5': '30px', // Add this line to define the width for the active dot
      },
    },
  },
  plugins: [],
}