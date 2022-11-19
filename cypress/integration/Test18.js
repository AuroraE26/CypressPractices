/*
TEST 18: PARAMETERIZING TEST DATA [CONTINUE CODE 17].
This test takes multiple products of the json file [an array of products] and parameterize the
test data using each command.


1. [CODE OF TEST 17]
2. Example.json: productName:['Blackberry', 'Nokia Edge']
3. With this data of json file use each command to use the products of the array 'productName' and use 
selectProduct command withthis new variable.

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
    
        cy.get(this.data.productName).each((el,index,list)=>{
            cy.selectProduct(el);
        });
    });
});