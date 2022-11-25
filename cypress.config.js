const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bea3y8',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  reporter:'mochawesome',
  env:{
    url: 'https://rahulshettyacademy.com',
  },
  retries:{
    runMode:1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //return require('./cypress/plugins/index.js')(on, config)
    },specPattern:'cypress/integration/*.js',
  },
});