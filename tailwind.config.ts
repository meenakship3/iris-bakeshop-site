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
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        assistant: ["var(--font-assistant)"], // font-body
        accent: ["var(--font-mynerve)"], // font-accent
        oswald: ["var(--font-oswald)"], // font-heading
      },
    },
  }
} satisfies Config;