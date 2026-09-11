/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        charcoal: "#1B1B1B",
        ivory: "#F4F1EA",
        beige: "#E8E2D8",
        gold: "#A88A5A",
        muted: "#77736C",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
