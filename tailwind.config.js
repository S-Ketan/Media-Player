/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the root-level index.html
    "./src/**/*.{html,js,ts,jsx,tsx}", // Include all source files where Tailwind classes are used
  ],
  theme: {
    extend: {
      scrollbar: {
        'hide': {
          'overflow': 'hidden',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'overflow': 'hidden',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
