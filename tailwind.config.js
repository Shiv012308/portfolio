/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#050505",
          secondary: "#0C0C0E",
        },
        charcoal: "#151515",
        red: {
          DEFAULT: "#D71920",
          bright: "#FF3045",
        },
        royal: {
          blue: "#1746B8",
          purple: "#5A32D6",
        },
        electric: "#275DFF",
        navy: "#071A3D",
        off: "#F3F0E8",
        grey: "#9A9A9A",
        gold: "#D1AA4F",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
