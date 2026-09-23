import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#e8eef6",
        muted: "#a8b5c6",
        line: "#223148",
        canvas: "#0a111b",
        accent: "#58a6ff",
        "accent-soft": "rgba(88, 166, 255, 0.12)",
        teal: "#45d0ac",
      },
      boxShadow: {
        card: "0 12px 36px -24px rgba(0, 0, 0, 0.78)",
      },
    },
  },
  plugins: [],
};

export default config;
