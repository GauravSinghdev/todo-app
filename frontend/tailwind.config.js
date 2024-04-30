/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cursive: ["cursive", "sans-serif"],
        roboto: ["Robot", "sans-serif"]
      },
    },
  },
  plugins: [],
}

