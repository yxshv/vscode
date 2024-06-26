/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
      },
      colors: {
        bg: "#1D1E20",
        text: {
          1: "#E9EBF4",
          2: "#B2B4BE",
        },
        accent: {
          1: "#206DBF",
          2: "#1F9CF0",
          3: "hsl(211, 71.3, 50)",
        },
        gray: {
          1: "#38393E",
          2: "#252527",
          3: "#7B7D88",
          4: "hsl(230, 5.1, 28)",
        },
      },
    },
    animation: {
      "fade-in": "fade-in 1s ease-in-out forwards",
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
  },
  plugins: [],
};
