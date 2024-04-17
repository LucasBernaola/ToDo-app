/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FF5722',
        background: '#FFFFFF',
        textPrimary: '#333333',
        textSecondary: '#757575',
      },
    },
  },
  plugins: [],
}