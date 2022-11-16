/*
TEST 11. NAVIGATE BROWSER CONTROLS
This test handles a childtab by removing target attribute of the link <a> and verifies if the new url includes 
the text expected to confirm the url address of the child tab. Finally, navigates back to the previous url.

1. Go to url: 'https://rahulshettyacademy.com/AutomationPractice/'.
2. Remove the attribute target with invoke() function of the window child and click on it.
3. With the url() function verify if the new url includes 'rahulshetty' in its text address.
4. Navigate back to the previous url.
*/

///<reference types='Cypress'/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.url().should('include','rahulshetty');
        cy.go('back');
    });
});