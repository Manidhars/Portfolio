module.exports = {
  content: [
    "./app/**/*.tsx",
    "./components/**/*.tsx",
    "./pages/**/*.tsx",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: "scroll-smooth",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
