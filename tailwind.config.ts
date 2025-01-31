import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,tsx}", "./src/components/**/*.{js,ts,tsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["Jetbrains-Mono-Nerd"],
        poppins: ["Poppins"],
        ubuntu: ["Ubuntu-Nerd"],
        inder: ["Inder"],
        jersey: ["Jersey"],
        "chakra-petch": ["Chakra-Petch"],
        audiowide: ["Audiowide"],
      },
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
