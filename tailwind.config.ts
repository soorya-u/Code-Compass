import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,tsx}", "./src/components/**/*.{js,ts,tsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          active: "var(--primary-active)",
        },
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [],
};

export default config;
