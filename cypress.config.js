const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = defineConfig({
  projectId: 'bea3y8',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  env:{
    url: 'https://rahulshettyacademy.com',
  },
  retries:{
    runMode:1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
      //return require('./cypress/plugins/index.js')(on, config)
    },specPattern:'cypress/integration/BDD/*.feature',
  },
});