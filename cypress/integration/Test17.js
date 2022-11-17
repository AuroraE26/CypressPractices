/*
TEST 17: CUSTOMIZED CYPRESS COMMANDS
In this test we create a customized command called selectProduct to reuse it with multiple products.

1. [CODE OF TEST16]
2. On support/commands.js file add a parent command called 'selectProduct' with a variable 'productName'.
3. Get the card title of the products and iterate each card.
4. If the text includes the productName click on the button of the card.
5. On the test file call this command with 'Blackberry' product.
*/

///<reference types='cypress'/>
describe('', function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data;
        });
    });

it('', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('input[name="name"]').eq(0).type(this.data.name);
        cy.get('select[class="form-control"]').select(this.data.gender);
        cy.get('input[name="name"]').eq(1).should('have.value',this.data.name);
        cy.get('input[name="name"]').eq(0).should('have.attr','minlength',2);
        cy.get('#inlineRadio3').should('be.disabled');
        cy.get('a[class="nav-link"]').eq(1).click();
        cy.selectProduct('Blackberry');
    });
});

