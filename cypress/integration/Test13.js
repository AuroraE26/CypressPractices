/*
TEST 12. HANDLING MOUSE HOVER POPUPS
This test handles a mouse hover popup with invoke() function by Jquery 'show()' function, Search for 'Top'
option and forces click. Verifies the next url has the 'Top' text in its address.

1. Go to url: 'https://rahulshettyacademy.com/AutomationPractice/'.
2. Get the hover hidden content and use show() function with the invoke() function. 
3. Select on the popup menu the 'Top' option by forcing a click.
4. Verify if the redirected url includes the word 'top' on its text address.


*NOTE:In JQuery there is a function show() that is used to display the hidden and selected elements.
*/

///<reference types='Cypress'/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
    });
});