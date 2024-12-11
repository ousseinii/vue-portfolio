/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveUp: {
          "0%, 100%": { transform: "translateY(0)" }, // Position initiale et finale
          "50%": { transform: "translateY(-10px)" }, // Monte légèrement
        },
      },
      animation: {
        slowMoveUp: "moveUp 3s ease-in-out infinite", // Animation infinie, lente (5s)
      },
    },
  },
  plugins: [],
};
