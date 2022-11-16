/*
TEST 10. HANDLING CHILD TABS
*NOTE: When a link <a> opens in another window Cypress can't habndle it so we need to erase that atribute to 
make the new redirection to the same tab.

This test handles a childtab by removing the attribute 'target' of the link <a> with invoke() mocha function 
and JQuery function removeattr().

1. Go to url: 'https://rahulshettyacademy.com/AutomationPractice/'.
2. Select the child tab we want to check and use the invoke function to remove the attribute 'target'.
3. Click on the button with the removed attribute.
*/


///<reference types='Cypress'/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr','target').click();

    });
});