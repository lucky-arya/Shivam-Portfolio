import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      }
    }
  },
  plugins: []
};

export default config;
