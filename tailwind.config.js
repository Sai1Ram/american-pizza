/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "translate(-50%, 0%) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-50%, 0%) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
}