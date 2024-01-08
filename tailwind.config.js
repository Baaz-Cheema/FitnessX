/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,html}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
      'xs': { 'max': '450px' },
      'min-2xl': { 'min': '1536px' },
      'min-lg': { 'min': '1024px' },
      'min-md': { 'min': '768px' },
      'min-sm': { 'min': '640px' },
    },
    fontFamily: {
      'prata': ['Prata', 'serif'],
      'rajdhani': ['Rajdhani', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}

