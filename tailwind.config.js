/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111814",
          soft: "#2A332E",
          mute: "#5C6B62",
        },
        paper: {
          DEFAULT: "#F2F5F3",
          elev: "#FFFFFF",
        },
        line: "#D5DDD7",
        teal: {
          DEFAULT: "#0E7C6B",
          deep: "#0A5C50",
          mist: "#D8F3EE",
        },
        spark: {
          DEFAULT: "#C8F04D",
          ink: "#1A2E0A",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Outfit", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { opacity: "0", clipPath: "inset(0 0 100% 0)" },
          "100%": { opacity: "1", clipPath: "inset(0 0 0 0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(1.5%, -1%, 0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        reveal: "reveal 1s ease-out both",
        drift: "drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
