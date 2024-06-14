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
        greenboard:"#739552",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))", 
        border: "hsl(var(--border))",
      },
      screens:{
        xs:"426px",
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px"
      },
      width:{
        300:"300px"
      },
      gridTemplateColumns: {
        '7/3': '70% 30%',
      },

    },
  },
  plugins: [],
}

