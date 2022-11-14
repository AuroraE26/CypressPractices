/*
TEST 2
HANDLING ASYNC PROMISES WITH CYPRESS AND PRINT TEXT.

This test case go to an ecommerce, search for words with 'ca', click on the fourth child of the products
object and click on its 'add to cart' button. Test if the length of these products is four and if the 
second product contains 'add to cart' text and click it, resolving its asynchrony with .then.

search for 'cashews' 
on the results and adds the product by clicking on the card.
1. Go to url: https://rahulshettyacademy.com/seleniumPractise/#/.
2. Type on the input search bar the word 'ca'.
3. Save shown cards in class 'products'  with a variable called 'productLocator'.
4. Make sure the products shown have length of 4.
5. Select the fourth child of this @productClass object and click on the button.
6. Test if the second product of @productLocator contains "Add TO CART" text and click
   resolve the asyncrony with .then-> console.log('sf')

To test logo's text is correctly displayed:
7. Check if the object of the class .brand has the text 'GREENKART'.
*/

const cypress = require("cypress");

describe('', function(){
    it('', function(){
        cypress.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('search-keyword').type('ca');
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('product').should('have.length',4);
        cy.get(':nth.child(3)>.product-action>button').click();
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf');
        });

        //assert if logo text is correctly displayed
        cy.get('brand').should('have.text','GREENKART');
    });
});