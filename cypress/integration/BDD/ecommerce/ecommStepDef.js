
import{Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../pageObjects/HomePage';
import ProductPage from '../../../pageObjects/ProductPage';

const homePage = new HomePage();
const productPage = new ProductPage();
var name;
    Given('I open Ecommerce Page',function(){
        cy.visit(Cypress.env('url')+'/angularpractice/');
    });

    When('I add items to cart', function(){
        homePage.getShopTab().click();
        cy.get(this.data.productName).each((el,index,list)=>{
            cy.selectProduct(el);
        });
        productPage.checkOutButton().click();
    });

    And('validate the total prices',()=>{
        var sum= 0;
        cy.get('tr td:nth-child(4) strong').each((el,index,list)=>{
            const amount=el.text();
            var res = amount.split(" ");
            res = res[1].trim();
            sum = Number(sum) + Number(res);
        });
        
        cy.get('h3 strong').then((el)=>{
            const amount = el.text();
            var res = amount.split(" ");
            var total = res[1].trim();
            expect(Number(total)).to.equal(sum);
        });
    });

    Then('select the country submit and verify Thankyou', function(){
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click();
        cy.get('#country').type('India');
        cy.get('.suggestions>ul>li>a').click();
        cy.get('#checkbox2').click({force:true});
        cy.get('input[value="Purchase"]').click();
        cy.get('div[class*="alert"]').then((element)=>{
            const actualText=element.text();
            expect(actualText.includes('Success')).to.be.true;
        });
    });

    When('I fill the form details',function(dataTable){
        name = dataTable.rawTable[1][0];
        homePage.getEditBox().type(dataTable.rawTable[1][0]);
        homePage.getGender().select(dataTable.rawTable[1][1]);
    });

    Then('Validate the forms behavior', function(){
        homePage.getTwoWayDataBinding().should('have.value', name);
        homePage.getEditBox().should('have.attr','minlength','2');
        homePage.getEntrepreneur().should('be.disabled');
        // Cypress.config('defaultCommandTimeout',8000);
    });

