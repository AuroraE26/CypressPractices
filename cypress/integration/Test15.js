/*
TEST 15: UNDERSTAND HOW FIXTURES WORK IN DRIVING DATA.
In this test we add fixtures(example.json) to the Cypress Project calling it with the before() function 
recovering tha data of the json file and using it to fill a form (input and select).

1. Modify fixtures/example.json: name:Bob, gender:male.
2. In TestFile add on the before function recovering the data with fixture() function.
3. In the it() function visit the angularpractice of the rahulshettyacademy page. 
4. On the input object of the page type de name of the data recovered.
5. On the select object of the page set the gender of the data recovered.
*/

///<reference types='cypress'/>
describe('', function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data = data;
        });
    });
    it('', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('input[name="name"]').eq(0).type(this.data.name);
        cy.get('select[class=form-control]').select(this.data.gender);
    });
});