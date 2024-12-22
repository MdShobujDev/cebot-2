import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
        almarai: ["var(--font-almarai)", "sans-serif"],
      },

      colors: {
        primary: {
          blue: "#539DE1",
          lilac: "#8EA9F1",
          indigo: "#3A47E1",
        },
        secondary: {
          pink: "#539DE1",
          purple: "#874BF6",
        },
        neutrals: {
          black: "#000000",
          "dark-grey": "#C4C8CC",
          "light-grey": "#E6EAF3",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
