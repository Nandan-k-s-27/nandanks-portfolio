/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        card: '#131929',
        foreground: '#e2e8f0',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
