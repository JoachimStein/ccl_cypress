describe("MRR Local", function(){
    it('visit', function(){
        cy.viewport(1000, 600)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Inventory')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[1]").click()         //New 
        cy.wait(1000)
        cy.get("#mrr_type_0").select('Local')         //MRR ID
        cy.get("#purchase_order_id_0").type('LPO/00')
        cy.wait(1000)
        cy.get("#purchase_order_id_0").type('{Enter}')   //PO id select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send For Review')]").click()        
        cy.wait(1000)
        cy.xpath("//button[contains(.,'Ok')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
        cy.xpath("//span[contains(.,'Reviewed')]").click()        
        cy.wait(1000)
        // cy.xpath("//span[contains(.,'Send To Approver')]").should('have.text', 'MRR Approve')
        cy.xpath("//span[contains(.,'Validate')]").click()        
        cy.wait(1000)
        // cy.xpath("//span[contains(.,'Apply')]").click()
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'MRR')]").click()


        Cypress.on('uncaught:exception', () => false)



    })
})