const mixins = require("./mixins.js");

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-mixins": { mixins }
  },
};
