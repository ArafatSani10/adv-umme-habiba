import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-value-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#1A1A1A",
          light: "#2D2D2D",
        },
        brand: {
          peach: "#F4C2C2",
          gold: "#C5A059",
        },
      },
    },
  },
  plugins: [],
};

export default config;