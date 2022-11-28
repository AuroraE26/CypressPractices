/*
TEST 22: IMPLEMENTING THE SUM OF PRODUCTS FUNCTIONALITY
This test verifies that the sum of the prices of the products in the cart are adding correctly.
1. [LAST CODE]
2. Sets a new variable 'sum =0'.
3. Get the fourth column of the rows that aren't the title. and make an each cycle.
4. Set a new variable 'amount' with the text of each element.
5. Use split() function to split the text after the " " and get only the number. [var res]
6. Use trim() function to use only the number of res[1].
7. Convert string to number both 'res' and 'sum' variable. [sum]
Check if the total shown by the page is equal to the one calculated:
8. Get the element of total using then().
9. Save it into a variable using text() function.
10. Use split() function to separate the number of the money symbol.
11. Use trim() function to use only the number of res[1]. [var total]
12. Convert string to number the 'total' variable and compare it to 'sum' variable.
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
    // homePage.getEditBox().type(this.data.name);
    // homePage.getGender().select(this.data.gender);
    // homePage.getTwoWayDataBinding().should('have.value',this.data.name);
    // homePage.getEditBox().should('have.attr','minlength',2);
    // homePage.getEntrepreneur().should('be.disabled');
    homePage.getShopTab().click();

        cy.get(this.data.productName).each((el,index,list)=>{
            cy.selectProduct(el);
        });
        productPage.checkOutButton().click();
//-----------TEST 22 Starts here 
        var sum = 0;
        cy.get('tr td:nth-child(4) strong').each((el,index,list)=>{
            const amount=el.text();
            var res = amount.split(" ");
            res = res[1].trim();
            sum = Number(sum) + Number(res);
        });
        
        cy.get('h3 strong').then(function(el){
            const amount = el.text();
            var res = amount.split(" ");
            var total = res[1].trim();
            expect(Number(total)).to.equal(sum);
        })

// -----------TEST 21 Starts here 
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