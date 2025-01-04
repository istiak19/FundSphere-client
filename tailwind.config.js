/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'button-dark':'#493e3e'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    theme: ['light', 'dim']
  },
  // @apply
}

