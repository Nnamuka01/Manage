/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // for media screens
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // for colors
      colors: {
        brightRed: "#F25F3A",
        brightRedLight: "#F6866A",
        brightRedSupLight: "#FDECE7",
        darkBlue: "#242D52",
        darkGrayishBlue: "#9095A7",
        veryDarkBlue: "#1D1E25",
        veryPaleRed: "#FFEFEB",
        veryLightGray: "#FAFAFA",
      }
    },
  },
  plugins: [],
}
