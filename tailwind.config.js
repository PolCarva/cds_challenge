/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#009ad9",
          hover: "#0081b3",
          dark: {
            DEFAULT: "#006699",
            hover: "#005580",
          },
        },
      },
    },
  },
  plugins: [],
};
