/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: '"Sofia Sans", sans-serif', 
      },
      colors: {
        'custom-text-1': '#F46926',
        'custom-text-2': '#F34126',
   
      }
    }
  },
  plugins: [require("daisyui")],
}

