const access_group = require('/home/stein/cypress/cypress_automation_ConfidenceCement/cypress/e2e/[CCL_WebAutomation]/cypress/fixtures/access_group.json');
 class login{
    loginPage() {
        cy.viewport(1360,800)
        cy.visit("http://192.168.3.187:7071/web/login")
        cy.wait(1000)
        cy.get("#login").type(access_group.PR_Initiator.userName)
        cy.wait(1000)
        cy.get("#password").type(access_group.PR_Initiator.password)
        cy.wait(1000)
        cy.get(".btn").click()
        cy.wait(1100)
    }
 }
 export default login;