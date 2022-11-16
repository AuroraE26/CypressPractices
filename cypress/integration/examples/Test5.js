/*
TEST 5: VERY AND AUTOMATE CHECKBOX
This test case go to an automation practice page, checks a specific checkbox, verifies if it's checked and 
its value. It cheks the box again and now verifies if it is unchecked, and finally checks two boxes at the 
same time.
1. Go to url: https://rahulshettyacademy.com/AutomationPractice/.
2. Check '#checkboxOption1' box and verifies if it is checked and its value should be 'Option1'.
3. Uncheck '#checkboxOption1' box and verifies if it is unchecked.
4. Check option2 and option3 at the same time.
*/

///<reference types="Cypress"/>
describe("",function(){
    it("",function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check(["option2","option3"]);
    })
})