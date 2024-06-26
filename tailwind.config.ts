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
        k2d: ["var(--font-K2D)"],
        abel: ["var(--font-abel)"],
      },
      screens:{
        'mobile': {'max': '767px'},
      },
    },
  },
  plugins: [],
};
export default config;
