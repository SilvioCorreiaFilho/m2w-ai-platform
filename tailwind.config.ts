import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A08",
          warm: "#141410",
          deep: "#060604",
        },
        cream: {
          DEFAULT: "#EDE8DC",
          muted: "#7A7570",
          faint: "rgba(237,232,220,0.06)",
          border: "rgba(237,232,220,0.10)",
          bright: "rgba(237,232,220,0.85)",
        },
        lime: {
          DEFAULT: "#C2FF3D",
          dim: "rgba(194,255,61,0.10)",
          border: "rgba(194,255,61,0.25)",
        },
        ember: {
          DEFAULT: "#FF3B1A",
          dim: "rgba(255,59,26,0.15)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-space-mono)", "Courier New", "monospace"],
        sans: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.85" }],
        "11xl": ["12rem", { lineHeight: "0.82" }],
      },
      letterSpacing: {
        "editorial": "0.25em",
        "widest-2": "0.35em",
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "marquee": "marquee 28s linear infinite",
        "grain": "grain 0.4s steps(1) infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "grain": {
          "0%,100%": { backgroundPosition: "0% 0%" },
          "10%": { backgroundPosition: "-5% -10%" },
          "20%": { backgroundPosition: "-15% 5%" },
          "30%": { backgroundPosition: "7% -25%" },
          "40%": { backgroundPosition: "20% 25%" },
          "50%": { backgroundPosition: "-25% 10%" },
          "60%": { backgroundPosition: "15% 5%" },
          "70%": { backgroundPosition: "0% 15%" },
          "80%": { backgroundPosition: "25% 35%" },
          "90%": { backgroundPosition: "-10% 10%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "editorial": "0 0 0 1px rgba(237,232,220,0.10)",
        "lime-glow": "0 0 30px rgba(194,255,61,0.20)",
        "ink-hard": "8px 8px 0px #0A0A08",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
