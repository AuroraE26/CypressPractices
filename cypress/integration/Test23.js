/*
TEST 23: MOCK HTTP RESPONSES FOR GENERATING STUB DATA TO TEST EDGE SCENARIOS.
This test case goes to a page containig a book's databse. Unsing intercept method we send the request we want
to incetercept, and the response we want to send to it. Once the information has been exchange we assert the
lenght of the products found and the message shown.

    1. Visit https://rahulshettyacademy.com/angularAppdemo.
    2. With intercept method set the request:
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    3. With intercept method set the response on the body and a statusCode of 200:
                "book_name":"RestAssured with Java",
                "isbn":"RSU",
                "aisle":"2301"
    4.Click 'Virtual Library' button.     
    5.Assert for length of products and message shown.     
*/

///<reference types="Cypress"/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode:200,
            body:[{
                "book_name":"RestAssured with Java",
                "isbn":"RSU",
                "aisle":"2301"
            }]
        }).as('bookretrievals');
        cy.get('button[class="btn btn-primary"]').click();
        cy.wait('@bookretrievals').should(({request,response})=>{
            cy.get('tr').should('have.length', response.body.length+1)
        });
        cy.get('p').should('have.text','Oops only 1 Book available');
    });
});