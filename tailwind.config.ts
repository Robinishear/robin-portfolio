import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: { DEFAULT: "#a3e635", soft: "#d9f99d" },
        cyan: { DEFAULT: "#22d3ee", soft: "#a5f3fc" },
        ember: "#f97316",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translate(0,0)" },
          "33%": { transform: "translate(60px,-20px)" },
          "66%": { transform: "translate(-40px,30px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        float: "float 16s ease-in-out infinite",
        "fade-up": "fade-up .8s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
