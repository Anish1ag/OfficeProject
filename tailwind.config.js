/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#031a1b",
        "custom-purple": "#9290C3",
        "custom-green": "#43766C",
        "success-green": "#5cb85c",
        "smoke-white": "#F5F5F5",
        "golden-sand": "#E8C872",
        "papaya-whip": "#FFF3CF",
        "custom-gray": "#C9D7DD",
      },
    },
  },
  plugins: [],
};
