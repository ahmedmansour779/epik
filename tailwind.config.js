/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rammetto: ["Rammetto One", 'sans-serif'],
        Alumni: ["Alumni Sans Pinstripe", 'sans-serif'],
        Urbanist: ["Urbanist", 'sans-serif'],
        Waiting: ["Waiting for the Sunrise", 'cursive'],
        Quicksand: ["Quicksand", 'sans-serif']
      },
      colors: {
        primary: "#7069C9",
        blue: "#51ADE5",
      }
    },
  },
  plugins: [],
}

