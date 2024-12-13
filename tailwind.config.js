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
      boxShadow: {
        neon: "0 0 10px #FF0054, 0 0 20px #5800FF", 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adicionando Poppins como a fonte padrão
      },
    },
  },
  plugins: [],
}
