const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    NEWS_API_KEY: "275cabb19b344e0e804ee93d9e536967",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
