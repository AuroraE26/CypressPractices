/*
TEST 16: VALIDATION OF ATTRIBUTES
In this test validations are made by using the code on test 15(fixtures). Validation on the data name,
on disability of radio buttons.

1. [CODE OF TEST15]
2. Verify if the data of input 'Two-way Data Binding example' has value of data name.
3. Verify if input name 1 has an attribute called minlength with value 2.
4. Verify if radiobutton3 is disabled.
5. Click on the 'Shop' link of the menu bar.
*/

///<reference types='cypress'/>
describe('', function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data;
        });
    });
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('input[name="name"]').eq(0).type(this.data.name);
        cy.get('select[class="form-control"]').select(this.data.gender);
        
        cy.get('input[name="name"]').eq(1).should('have.value',this.data.name);
        cy.get('input[name="name"]').eq(0).should('have.attr','minlength',2);
        cy.get('#inlineRadio3').should('be.disabled');
        cy.get('a[class="nav-link"]').eq(1).click();
    });
});