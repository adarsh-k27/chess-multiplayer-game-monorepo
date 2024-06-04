/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whiteboard': '#EBECD0', // Replace with your desired color
      },

    },
  },
  plugins: [],
}

