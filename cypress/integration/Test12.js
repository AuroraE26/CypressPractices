/*
TEST 12. HANDLING WEB TABLES USING EACH COMMAND
This test search for the cell that includes 'Python' and goes to the price column and verifies it is '25'.

1. Go to url: 'https://rahulshettyacademy.com/AutomationPractice/'.
2. Go to the table's second row, second column and with an each iteration search the cell that includes 
'Python'.
3. Once the cell found go to the next column and get the price by handling the mocha incompatibiliy of the
text() function with .then() and save the variable 'priceText'.
4. Verify if 'priceText' is equal to '25'.
*/

///<reference types='Cypress'/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each((el,index,list)=>{
           let elText = el.text();
           if(elText.includes('Python')){
            cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                const priceText = price.text();
                expect(priceText).to.equal('25');
            });
           };
        });
    });
});