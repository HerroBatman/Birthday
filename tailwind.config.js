/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        romantic: ['"Great Vibes"', "cursive"],
        elegant: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
