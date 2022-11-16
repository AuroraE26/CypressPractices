/*
TEST 6: STATIC DROPDOWNS USING SELECT COMMAND
This test select an option of a static dropdown and verify if it has the value 'option2'.

1. Go to url: https://rahulshettyacademy.com/AutomationPractice/.
2. Select the dropdown, use the select function to choose 'option2' and
verify that its value is correctly 'option2'.
*/

///<reference types="cypress"/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('select').select('option2').should('have.value','option2');
    })
})