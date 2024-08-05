/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./html/*.html", "./html/blogs/*.html", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

