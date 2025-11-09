/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // ✅ important for React + JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
