/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      impact: ["Impact"],
      orkney: ["var(--font-Orkney)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        paralaxImage: "url('/gears.jpg')",
      },
      blur: {
        xs: "2px",
      },
      screens: {
        sm: "506px",
        // => @media (min-width: 506px) { ... }

        md: "990px",
        // => @media (min-width: 860px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  },
};
