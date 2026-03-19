import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a1208",
        cream: "#fdf6ec",
        smoke: "#f5ede0",
        amber: {
          DEFAULT: "#c8620a",
          light: "#e8850f",
          50: "#fef3e8",
        },
        gold: "#d4a843",
        charcoal: "#2c2118",
        muted: "#7a6552",
        border: "#e2d4c0",
        card: "#fff9f2",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "testi-scroll": "testiScroll 40s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        flicker: "flicker 2s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        testiScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
