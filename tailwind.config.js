/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          900: '#111827',
        },
        'indigo': {
          200: '#c7d2fe',
          300: '#a5b4fc',
          500: '#6366f1',
          900: '#312e81',
        },
        'purple': {
          900: '#4c1d95',
        },
      }
    },
  },
  plugins: [],
}