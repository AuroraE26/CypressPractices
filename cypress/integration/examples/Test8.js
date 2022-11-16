/*
TEST 8: HANDLING VISIBLE AND INVISIBLE ELEMENTS USING ASSERTIONS
This test verifies if some objects are visible or not visible.

1. Go to url: https://rahulshettyacademy.com/AutomationPractice/.
2. Verify if the text with id #displayed-text is visible.
3. Click on the button to hide text.
4. Verify if the text with id #displayed-text is not visible.
5. Click on the button to show text.
6. Verify if the text with id #displayed-text is visible.
*/
///<reference types="cypress"/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    });
});