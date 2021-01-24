module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Montserrat",
          "Roboto",
        ],
      },
      colors: {
        background: {
          footer: "#FBFBFB",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
