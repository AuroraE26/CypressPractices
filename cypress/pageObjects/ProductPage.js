class ProductName{
    checkOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-link');
    };
};

export default ProductName;