/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#fbbf24",
        // Add a dark surface color for better consistency
        dark: "#0f172a", 
      },
    },
  },
  plugins: [],
}