describe("Access Right Check for Comparative Statement", function(){
    const user_ids = [
        {
            username : "scm.user",
            role : "SCM Initiator"
        },
        {
            username : "shod.user",
            role : "SCM - HOD"
        },
        {
            username : "md.user",
            role : "Managing Director"
        }
    ]

    let userIndex;

    user_ids.forEach((user, index) => {
        it(`Comparative Statement : <User Info> ${user.role}`, function(){
            cy.viewport(1400,780)
            cy.visit("http://192.168.3.227:7071/web/login") 
            cy.get("#login").type(user.username)
            cy.wait(1000)
            cy.get("#password").type("1234")
            cy.wait(500)
            cy.get(".btn").click()
            cy.xpath("//i[@class='oi oi-apps']").click()
            cy.xpath("//a[contains(.,'Purchase')]").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Comparative Statement')]").click()
            cy.wait(1000)
            userIndex = index

            if(userIndex === 0) {
                cy.xpath("(//button[contains(.,'New')])[2]").click()
                cy.wait(1000)
                cy.get("#request_for_quotation_id_0").clear()
                cy.wait(500)
                cy.get("#request_for_quotation_id_0").type("RFQ")
                cy.wait(500)
                cy.get("#request_for_quotation_id_0").type('{Enter}')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Compare')]").should("have.text",'Compare')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Compare')]").click()
                cy.wait(1000)
                cy.xpath("(//button[contains(.,'Edit')])[2]").click()
                cy.wait(1000)
                cy.xpath("(//input[@type='text'])[1]").clear().type('1').type('{Enter}')
                cy.wait(1000)
                cy.xpath("(//input[@type='text'])[2]").clear().type('0').type('{Enter}')
                cy.wait(1000)      
                cy.xpath("(//button[contains(.,'Save')])[2]").click()
                cy.wait(1000)
                cy.xpath("(//button[contains(.,'Go Back')])[1]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Send For Approval')]").should('have.text', 'Send For Approval')    //Assertion
                cy.xpath("//span[contains(.,'Send For Approval')]").click()          //send for approval
                cy.wait(1000)
            }

            if (userIndex === 1) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Approve')]").should('have.text', 'Approve')    //Assertion
                cy.xpath("//span[contains(.,'Approve')]").click()          //approved by SCM HOD
                cy.wait(2000)        
            }

            if (userIndex === 2) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Approve')]").click()          //approved by MD
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Amendment')]").should('have.text', 'Amendment')   //assertion
                cy.wait(2000)  
                cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')   //assertion
                cy.wait(2000)              
            }
        })
    })
})