const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      aa: "1408px",
      ab: "431px",
      bb: "720px",
      cc: "581px",
      dd: "961px",
      ee: "807px",
      ...defaultTheme.screens,
    },
    extend: {
      margin: {
        15: "3.8rem",
        17: "4.25rem",
        31: "136px",
        ...defaultTheme.margin,
      },
    },
  },
  plugins: [],
};
