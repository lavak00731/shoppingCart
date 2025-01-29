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
        'review-color': '#707070',
        'cta-color': '#1C1D1D'
      },     
      fontFamily: {        
        bebas: ['Bebas Neue', 'sans-serif'],
        poppins: ['Poppins', 'serif']
      }
    },
  },
  plugins: [],
}

