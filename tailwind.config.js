/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      primarywhite:'#E8E8E3',
      accentbrown: '#393632',
      secondarygreen:'#AFAF9D',
      darkgreen:'#cfcfba',
    },
    fontFamily: {
      'sans': ['Oswald', 'sans-serif'],
      custom: ['Overused Grotesk','Overused Grotesk Bold', 'sans-serif'],
    },
  },
  },
  plugins: [],
}