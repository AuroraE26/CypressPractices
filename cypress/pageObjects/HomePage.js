//Create methods: getEditBox(), getTwoWayDataBinding(), getGender(), getEntrepreneur(), getShopTab().
class HomePage{
    getEditBox(){
        return cy.get('input[name="name"]').eq(0);
    };
    getTwoWayDataBinding(){
        return cy.get('input[name="name"]').eq(1);
    };
    getGender(){
        return cy.get('select[class="form-control"]');
    };
    getEntrepreneur(){
        return cy.get('#inlineRadio3');
    };
    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link');
    }
};
export default HomePage;