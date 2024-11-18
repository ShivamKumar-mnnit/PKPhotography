import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/*/.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*/.{js,ts,jsx,tsx,mdx}",
    "./src/components/*/.{js,ts,jsx,tsx,mdx}",
    "./src/app/*/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      fontFamily: {
        custom: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      fontSize: {
        footer: "1.6rem", // Custom font size for the footer
      },
    },
  },
  plugins: [],
};

export default config