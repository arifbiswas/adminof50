/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6DA40A",
        base: "#F6F6F6",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        popping: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
