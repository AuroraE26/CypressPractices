/*
TEST 1
This test case go to an ecommerce, search for words with 'ca', search for 'cashews' 
on the results and adds the product by clicking on the card.
1. Go to url: https://rahulshettyacademy.com/seleniumPractise/#/.
2. Type on the input search bar the word 'ca'.
3. Save cards shown with a variable called 'productLocator'.
4. Start a forEach loop (@productLocator) to find the card of 'Cashews' and click on the button to add.  
*/

describe('My first test suite', function(){
    it('', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').as('productLocator');  
        cy.get('@productLocator').each((el, index, list)=>{
            const textVeg = el.find('h4.product-name').text();
            if(textVeg.includes('Cashews')){
                cy.wrap(el).find('button').click();
            };
        }); 
    });
});