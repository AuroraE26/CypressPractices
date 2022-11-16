/*
TEST 7: HANDLING DYNAMIC DROPDOWNS WITH EACH ITERATION
This test types in a dynamic dropdown and gets its values with an each iteration, compare the values shown with
the one wanted, select it and verify its value.

1. Go to url: https://rahulshettyacademy.com/AutomationPractice/.
2. Select the dropdown and type 'ind'.
3. Iterate the elements shown selecting their classes.
4. Make a conditional comparing each element's text with 'India'.
5. If it is 'India' click on the element(wrap it to avoid asynchony problems).
6. Assert if the dropdown has a value of 'India'.
*/

///<reference types="cypress"/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item').each((el,index,list)=>{
            if(el.text()==='India'){
                cy.wrap(el).click();
            }
        })
        cy.get('#autocomplete').should('have.value','India');
    });
});