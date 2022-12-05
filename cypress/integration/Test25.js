/*
TEST 25: HANDLING API CALL DIRECTLY WITHOUT INVOLVING BROWSERS WOTH CYPRESS
This test calls an API and sends a request with method, url and body parameters, then handles the promise and
asserts with response messages.

Library API-
    Base URL: http://216.10.245.166
    Resource: Library/Addbook.php
    Method: POST

    Input:JSON
        {
            "name":"Learn Appium Automation with Java",
            "isbn":"bcs",
            "aisle":"227",
            "author":"John foe"
        }
    
    Output JSON
        {
            "Msg":"Successfully added",
            "ID":"bcd227"
        }
*/

///<reference types="Cypress"/>

const { func } = require("assert-plus");

describe('',function(){
    it('',function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name":"Learn Appium Automation with Java",
            "isbn":"bcggsss",
            "aisle":"22s7",
            "author":"John foe",
        }).then(function(response){
            expect(response.body).to.have.property("Msg","successfully added");
            expect(response.status).to.eq(200);
        })
    });
});