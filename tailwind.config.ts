import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#08121C",
        paper: "#F0F4F7",
        denim: {
          DEFAULT: "#4A6C8C",
          light: "#6B8CA8",
          dim: "rgba(74, 108, 140, 0.15)",
        },
        electric: {
          DEFAULT: "#00D4FF",
          hover: "#00B8E0",
        },
        coral: "#FF6B6B",
        // Compatibility aliases with existing utility usage.
        base: "#08121C",
        accent: "#00D4FF",
        neon: "#FF6B6B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        retro: "0 0 0 1px rgba(15, 23, 42, 0.15), 6px 6px 0 rgba(15, 23, 42, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
