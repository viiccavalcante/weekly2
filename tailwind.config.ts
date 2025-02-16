import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#5a01e5",
          600: "#4a01c4",
        },
        secondary: {
          500: "#7c4dff",
          600: "#6a42e0",
        },
        background: "#f9fafb",
        text: "#1f2937",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        strong: "0px 6px 12px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
