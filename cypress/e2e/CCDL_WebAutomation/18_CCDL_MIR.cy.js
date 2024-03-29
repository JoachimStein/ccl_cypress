const URL = require('./Login_URL.json')

describe("Material Issue Return", function(){
    it('visit', function(){
        cy.viewport(1200, 660)
        cy.visit(URL.TestURL)   //url   Test server
        cy.get('#login').type('data_migration')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(2000)
        cy.get('.o_navbar_apps_menu > .dropdown-toggle > .fa').click()           //menu bar 
        cy.xpath("(//a[contains(.,'Inventory')])[1]").click()   // Inventory
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Material Issue Return')]").click()
        cy.wait(2000)
        cy.xpath("//button[contains(.,'Create')]").click()          //New 
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[1]").type('CCDL/')      //MI select
        cy.wait(1000)
        cy.xpath("(//input[@autocomplete='off'])[1]").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Save')]").click() 
        cy.xpath("//span[contains(.,'Review')]").click()
        cy.wait(1000)
        cy.get('[name="button_approved"] > span').click()
        cy.wait(1000)


    })
})