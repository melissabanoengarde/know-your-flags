/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        guessBehaviour: { "0%": { opacity: 1 }, "100%": { opacity: 0 } },
      },
      animation: {
        guessBehaviour: "guessBehaviour 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
