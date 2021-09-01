module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heroBg: "url('/img/heroBg.png')",
        section3: "url('/img/section3.png')",
        business: "url('/img/businessBg.png')",
      }),
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
      backgroundColor: ["active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
