/*
TEST 21: COMPLETING BUYING PROCESS [END TO END TEST].
Using last code, after putting two products on the cart and click on 'checkout' button, click again on 
next 'checkout' button, the type 'India' in the input box shown and handles the dynamic dropdown.
Force click on the checkbox of terms and conditions and clicks on submit button. Check if message contains
'Success' text.

1. Click 'checkout' button.
2. Type 'India' in the input box shown. 
3. Handles the dynamic dropbown by selecting 'India' option.
4. Force click on the checkbox of terms and conditions.
5. Click on submit button.
6. Check if alert message contains 'Success' text.

*/

///<reference types='cypress'/>
import HomePage from '../pageObjects/HomePage.js';
import ProductPage from '../pageObjects/ProductPage';

describe('', function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data;
        });
    });

it('', function(){
    cy.visit(Cypress.env('url')+'/angularpractice/');
    const homePage = new HomePage();
    const productPage = new ProductPage();
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value',this.data.name);
    homePage.getEditBox().should('have.attr','minlength',2);
    homePage.getEntrepreneur().should('be.disabled');
    homePage.getShopTab().click();
    
        cy.get(this.data.productName).each((el,index,list)=>{
            cy.selectProduct(el);
        });
        productPage.checkOutButton().click();
//-----------TEST 21 Starts here 
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        cy.get('.suggestions>ul>li>a').click();
        cy.get('#checkbox2').click({force:true});
        cy.get('input[value="Purchase"]').click();
        cy.get('div[class*="alert"]').then((element)=>{
            const actualText=element.text();
            expect(actualText.includes('Success')).to.be.true;
        });
    });
});