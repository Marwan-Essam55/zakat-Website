/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'spiritual-green': '#064e3b',
        'spiritual-gold': '#d4af37',
        'soft-gray': '#f9fafb',
      },
    },
  },
  plugins: [],
}