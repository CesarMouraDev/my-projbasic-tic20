/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        primary: "#FF0054", 
        secondary: "#5800FF", 
        accent: "#00D1FF", 
        background: "#1F1B33", 
        text: "#FFFFFF",        
      },
     
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
