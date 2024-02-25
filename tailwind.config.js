/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#031a1b",
        "custom-purple": "#9290C3",
        "custom-green": "#43766C",
      },
    },
  },
  plugins: [],
};
