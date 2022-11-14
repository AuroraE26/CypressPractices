/*
TEST 2
This test case go to an ecommerce, search for words with 'ca', search for 
'cashews' and makes sure the length is four
1. Go to url: https://rahulshettyacademy.com/seleniumPractise/#/.
2. Type on the input search bar the word 'ca'.
3. Assert if .product are 4 of length
*/


describe('My first test suite', function(){
    it('', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').should('have.length',4);
    });
});