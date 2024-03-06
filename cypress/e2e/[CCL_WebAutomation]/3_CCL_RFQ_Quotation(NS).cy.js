const User = require('./UsersCridential.json')

describe("Quotation", function(){
    it('visit', function(){
        cy.viewport(1920, 1200)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type(User.SCM_Initiator)       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Orders)]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Request For Quotation')]").click()  //Purchase
        cy.wait(1000)
    for (let i = 0; i < 1; i++) {       //Repeat run the test 
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.get("#purchase_request_ids_0").type('PR/0000').type('{Enter}')   // PR select
        //Unit price
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type('50')
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(7)").type('60')
        cy.xpath("//span[contains(.,'Confirm')]").click() //Confirm or Approval
        cy.xpath("//span[contains(.,'Go-back')]").should('have.text', 'Go-back')    //Assertion
        cy.xpath("(//span[contains(.,'Quotation')])[1]").click()          //Qoutation button
        cy.get("#partner_ids_0").type('DreamIT').type('{Enter}')         //Vendor select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Create Quotation')]").should('have.text', 'Create Quotation')   //assertion
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Create Quotation')]").click()    //save qoatation
        

        
    }

    Cypress.on('uncaught:exception', () => false)
    })
})