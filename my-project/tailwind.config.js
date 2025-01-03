/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aileron', 'sans-serif'],
      },
      colors: {
        labelYellow: 'rgba(253, 250, 213, 0.60)',
        fadedYellow: 'rgba(253, 250, 213, 0.30)',
      }
    },
  },
  plugins: [],
}