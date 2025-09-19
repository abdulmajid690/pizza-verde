/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "375px",
        xs: "480px",
        sm: "577px",
        small: "769px",
        md: "993px",
        tablet: "1024px",
        lg: "1080px",
        1200: "1200px",
        xl: "1280px",
      },
      colors: {
        primary: "#268240",
        secondary: "#90011E",
        darkGray: "#0000004D",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
}
