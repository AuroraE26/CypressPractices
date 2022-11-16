/*
TEST 14: HANDLING FRAMES
1. Go to url: 'https://rahulshettyacademy.com/AutomationPractice/'.
2. Load the iFrame with FrameLoaded() function.
3. Click on the 'mentorship' link of the iframe menu.
4. Verify if the class including 'pricing-title' has two items.

*NOTA: To handle iFrames it is needed to download iframes plugin: npm install -D cypress-iframes 
and import 'cypress-iframe' in file. ///<reference types="Cypress-iframe"/>
*/

///<reference types='Cypress'/>
///<reference types='Cypress-iframe'/>
import 'cypress-iframe';

describe('', function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href="mentorship"]').eq(0).click();
        cy.wait(2000);
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2);
    });
});