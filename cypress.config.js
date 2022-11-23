/* 
TEST 20: IMPORTANT CYPRESS CONFIGURATION INFORMATION
  Setup of important Cypress Information. 
    - defaultCommandTimeout: Wait until most DOM based commands are considered timed out.
    - pageLoadTimeout: Wait for page transition events or cy.visit(), cy.go(), cy.reload() commands to fire 
                       their page load events.
    - reporter: The reporter used during cypress run.
    - env: Any values to be set as environment variables.
    - retries: The number of times to retry a failing test.

*/

const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
      return require('./cypress/plugins/index.js')(on, config)
    },specPattern:'cypress/integration/*.js',
  },
});
