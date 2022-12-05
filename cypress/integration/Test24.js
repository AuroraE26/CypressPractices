/*
TEST 24: INTERCEPTING HTTP REQUEST DETAILS TO TEST SECURITY SCENARIOS
This test case uses intercept method by intercepting the HTTP request details.

    1. Visit https://rahulshettyacademy.com/angularAppdemo.
    2. With intercept method set the request:
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    3. Intercept the request details set with: 
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
    4.Click 'Virtual Library' button.     
*/

///<reference types="Cypress"/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>{
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res)=>{
            //    expect(res.statusCode.to.equal(403));
            });

        }).as('bookretrievals');
        cy.get('button[class="btn btn-primary"]').click();
        cy.wait('@bookretrievals');
    });
});