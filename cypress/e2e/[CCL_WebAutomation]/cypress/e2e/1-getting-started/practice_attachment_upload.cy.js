describe("mrr(qc)_testsuite", function(){
    it("process_flow_dp", function(){
        // Define View
        cy.viewport(1260,720)

        // Login
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("qa_user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)

        // Purchase Requisition
        cy.xpath("(//button[contains(.,'New')])[2]").click()
        cy.wait(1000)
        cy.get(".btn btn-secondary o_attach").click().type('{Enter}')
        cy.readFile('/home/stein/Downloads/Tolerance.png')
        cy.wait(1000)

        Cypress.on('uncaught:exception', () => false)
    })
})