/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'link-color': '#5C553A',
        'discount-color': '#5C7962',
      },     
      fontFamily: {        
        bebas: ['Bebas Neue', 'sans-serif'],
        poppins: ['Poppins', 'serif']
      }
    },
  },
  plugins: [],
}

