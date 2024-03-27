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
      },
    },
  },
  plugins: [],
};
