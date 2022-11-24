# CypressPractices
Automated (UI + Integration) Tests using Cypress with Mocha and Cucumber frameworks

SECTION 12: Dashboard and Mochawesome
A.Cypress Dashboard
    1.Google search 'Cypress Dashboard docs'.
    2. On your Cypress(The one you run with node_modules/.bin... open).
    3. Go to 'Runs' Tab and click on 'Log in to Dashboard' button.
    4. Login with Github.

    //Setup Project
    1. Set name of the project and privacy settings.
    2. Automatically ads 'ProjectId0 to /cypress.config.js file.
    3. Run the command asked on terminal:   cypress run --record --key[key].
    4. Go to your Cypress/Runs and your test will be there.
    5. If you click on it, you will be redirected to the dashboard.

B. Generating Mochawesome reports for Cypress 
    1. Google search 'Mochawesome'.
    2. Add Mochawesome to your project:     npm install --save-dev mochawesome.
    3. Install mocha:       npm install --save-dev mocha.
    4. Change Mocha version to "^5.2.0" on package.json file and run: npm install.
    5. To specify the part to your customer reporter:    cypress.json [All info in docs.cypress.io reporters].
            {
                "reporter": "mochawesome"
            }
        If you want to do it on CLI:    cypress run --reporter mochawesome.

    6. Run a spec with mochawesome:
        node_modules/.bin/cypress run --reporter mochawesome --spec cypress/integration/examples/TestFramework8.js
    7. A folder named 'mochawesome-report' will appear in your project, right-click on 'mochawesome.html',
        copy path and open it in the browser. You will see the report of the code.