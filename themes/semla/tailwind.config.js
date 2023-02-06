/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}