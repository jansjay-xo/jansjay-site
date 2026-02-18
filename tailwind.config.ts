import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#0f172a",
        accent: "#16a34a",
        paper: "#f8fafc",
        neon: "#14b8a6",
      },
      boxShadow: {
        retro: "0 0 0 1px rgba(15, 23, 42, 0.15), 6px 6px 0 rgba(15, 23, 42, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
