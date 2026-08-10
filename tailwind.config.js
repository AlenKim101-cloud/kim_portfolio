/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#09090b",
        panel: "#0f0f13",
        "panel-2": "#14141a",
        edge: "#21212b",
        "edge-bright": "#2e2e3a",
        ink: "#e7e7ea",
        muted: "#9a9aa6",
        accent: {
          DEFAULT: "#22d3ee",
          dim: "rgba(34, 211, 238, 0.12)",
          glow: "rgba(34, 211, 238, 0.35)",
        },
        ok: "#34d399",
        warn: "#fbbf24",
        exp: "#a78bfa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(34, 211, 238, 0.22)",
        "glow-sm": "0 0 12px rgba(34, 211, 238, 0.18)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        dashbg: {
          to: { backgroundPosition: "24px 0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        scan: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(120%)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
        dashbg: "dashbg 0.9s linear infinite",
        marquee: "marquee 32s linear infinite",
        scan: "scan 7s linear infinite",
      },
    },
  },
  plugins: [],
};
