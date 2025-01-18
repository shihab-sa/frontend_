import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F0ECE3",
        "dark-green": "#133216",
        "footer-bg-color": "#77892B",
      },

      fontFamily: {
        bangla: ["var(--font-tiro-bangla)", "serif"], // Reference the custom variable
      },
    },
  },
  plugins: [],
} satisfies Config;
