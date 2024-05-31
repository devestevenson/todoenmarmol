
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "480px",
      },
      colors: {
        tmwhite: "#FFFFFF",
        tmred: "#E10E17",
        tmgreen: "#018037",
        tmgray: "#4A494A",
      },
      fontFamily: {
        AbhayaL: ['Abhaya Libre'],
      }
    },
  },
  plugins: [],
}
