import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "marine-blue": "var(--marine-blue)",
        "purplish-blue": "var(--purplish-blue)",
        "pastel-blue": "var(--pastel-blue)",
        "light-blue": "var(--light-blue)",
        "strawberry-red": "var(--strawberry-red)",
        "cool-gray": "var(--cool-gray)",
        "light-gray": "var(--light-gray)",
        "magnolia": "var(--magnolia)",
        "alabaster": "var(--alabaster)",
      },
      fontFamily: {
        "ubuntu-regular": ["Ubuntu Regular", "sans-serif"],
        "ubuntu-medium": ["Ubuntu Medium", "sans-serif"],
        "ubuntu-bold": ["Ubuntu Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
