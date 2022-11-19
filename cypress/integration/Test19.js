/*
TEST 19: IMPLEMENT PAGE OBJECT DESIGN PATTERN
This test creates a new page object pattern named HomePage.js putting all the actions of Test19.js on 
methods: getEditBox(), getTwoWayDataBinding(), getGender(), getEntrepreneur(), getShopTab().

1. Create new folder 'pageObjects' and file 'HomePage.js' and creates HomePage class.
2. Create methods: getEditBox(), getTwoWayDataBinding(), getGender(), getEntrepreneur(), getShopTab().
3. Export default HomePage and import in the 'Test19.js' file.
4. In 'Test19.js' file create an object.
5. Substitute the lines with the methods created on the 'HomePage' class.
*/


///<reference types='cypress'/>
import HomePage from '../pageObjects/HomePage';
describe('', function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data;
        });
    });

it('', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    const homePage = new HomePage();
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value',this.data.name);
    homePage.getEditBox().should('have.attr','minlength',2);
    homePage.getEntrepreneur().should('be.disabled');
    homePage.getShopTab().click();
    
        cy.get(this.data.productName).each((el,index,list)=>{
            cy.selectProduct(el);
        });
    });
});