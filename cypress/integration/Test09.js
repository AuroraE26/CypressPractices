/*
TEST 9. HANDLING ALERTS
This test handles alert window and confirm window and verifies if the message that popups is the one expected.

1. Go to url: 'https://rahulshettyacademy.com/AutomationPractice/'.
2. Click on the button that displays the ALERT window.
3. Click on the button that displays the CONFIRM window by its value.
4. With on() function get the string of the ALERT window and verify if the expect string is equal to the
 one wanted.
5. With on() function get the string of the CONFIRM window and verify if the expect string is equal to the
 one wanted.
*/

///<reference types='Cypress'/>
describe('',function(){
    it('',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();
        cy.on('window:alert',(str)=>{
            expect(str).equal('Hello , share this practice page and share your knowledge');
        });

        cy.on('window:confirm', (str)=>{
            expect(str).equal('Hello , Are you sure you want to confirm?');
        })
    });
});