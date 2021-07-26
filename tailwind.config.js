module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        classic: ["Orienta", "sans-serif"],
      },
      backgroundColor: () => ({
        primary: "#4137ff",
        green: "#06d6a0",
      }),
      spacing: {
        46: "11.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
