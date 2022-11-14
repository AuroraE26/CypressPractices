/*
TEST 4
HANDLING ASYNC PROMISES WITH CYPRESS AND PRINT TEXT.

This test case go to an ecommerce, search for words with 'ca', click on the fourth child of the products 
object and click on its 'add to cart' button. Test if the length of these products is four and if the 
second product contains 'add to cart' text and click it, resolving its asynchrony with .then.

1. Go to url: https://rahulshettyacademy.com/seleniumPractise/#/.
2. Type on the input search bar the word 'ca'.
3. Save cards shown with a variable called 'productLocator'.
4. Start a forEach loop (@productLocator) to find the card of 'Cashews' and click on the button to add.
*/

///<reference  types="Cypress"/>
const cypress = require("cypress");

describe('', function(){
    it('', function(){
        cypress.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('search-keyword').type('ca');
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').each((el,index,list)=>{
            const textVeg = el.find('h4.product-name').text();
            if(textVeg.includes('Cashews')){
                wrap(el).find('button').click();
            };
            cy.get('.cart-icon>img').click();
        });

        //assert if logo text is correctly displayed
        cy.get('brand').should('have.text','GREENKART');
    });
});