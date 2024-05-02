describe("MRR(QC)_access_right_pre-stage", function () {
    const mrr_user_ids = [
        {
            userName: "mrr.init.user",
            role: "MRR Initiator"
        },
        {
            userName: "qc.init.user",
            role: "QC Reviewer"
        },
        {
            userName: "qc.approver.user",
            role: "QC Approver"
        },
        {
            userName: "mrr.reviewer.user",
            role: "MRR Reviewer"
        },
        {
            userName: "mrr.approver.user",
            role: "MRR Approver"
        }
    ]
    
    let userIndex; // Define the userIndex variable outside the forEach loop

    mrr_user_ids.forEach((user, index) => {
        it(`Inventory MRR Users : ${user.role}`, function () {
            cy.viewport(1360, 760);
            cy.visit('http://192.168.3.187:7071/web/login'); //url
            cy.get('#login').type(user.userName); // user input  
            cy.wait(1000);
            cy.get('#password').type('1234'); // password input
            cy.wait(1000);
            cy.get('.btn').click(); // loggin button click
            cy.wait(1000);
            cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
            cy.wait(1000);
            cy.xpath("//a[contains(.,'Inventory')]").click(); //Purchase
            cy.wait(1000);
            userIndex = index; // Assign the index value to userIndex

            if (userIndex === 0) {
                cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
                cy.wait(1000)
                cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
                cy.wait(2000)
                cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
                cy.wait(1000)
                cy.get("#mrr_type_0").select('Local')         //MRR Type Select
                cy.wait(1000)
                cy.get("#purchase_order_id_0").click()      // Direct and Local
                cy.wait(500)
                cy.get("#purchase_order_id_0").type('{Enter}')
                cy.wait(500)
                // cy.get("#ci_id_0").click()  // Foreign
                // cy.wait(500)
                // cy.get("#ci_id_0").type('{Enter}')
                // cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(500)
                cy.xpath("//input[@id='qc_required_0']").click()
                cy.wait(2000)        
                cy.xpath("(//span[contains(.,'Send For Review')])[1]").should('have.text', 'Send For Review').click()
                cy.wait(1000)
            }

            if (userIndex === 1) {
                cy.xpath("(//span[contains(.,'Operations')])[1]").click()    // dropdown
                cy.wait(1000)
                cy.xpath("//a[contains(.,'QC')]").click()    // MRR select 
                cy.wait(2000)
                cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
                cy.wait(1000)
                cy.get("#mrr_id_0").type("MRR").type('{Enter}')
                cy.wait(1000)
                // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(5)").type("50") // mOISTURE
                // cy.wait(1000)
                cy.xpath("(//span[contains(.,'Cancel')])[1]").should('have.text', 'Cancel')
                cy.wait(500)
                cy.xpath("(//span[contains(.,'Reviewed')])[1]").should('have.text', 'Reviewed')
                cy.xpath("(//span[contains(.,'Reviewed')])[1]").click()        
                cy.wait(1000)        
            }

            if (userIndex === 2) {
                cy.xpath("(//span[contains(.,'Operations')])[1]").click()    // dropdown
                cy.wait(1000)
                cy.xpath("//a[contains(.,'QC')]").click()    // MRR select 
                cy.wait(2000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Cancel')])[1]").should('have.text', 'Cancel')
                cy.wait(500)
                cy.xpath("(//span[contains(.,'Approved')])[1]").should('have.text', 'Approved').click()
                cy.wait(1000)
                // cy.xpath("//span[contains(.,'Amendment')]").should('have.text','Amendment')
                // cy.wait(1000)        
                cy.xpath("//span[contains(.,'Close')]").should('have.text','Close')
                cy.wait(1000)        
            }

            if (userIndex === 3) {
                cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
                cy.wait(1000)
                cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
                cy.wait(2000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
                cy.xpath("//span[contains(.,'Reviewed')]").click()
                cy.wait(1000)
            }

            if (userIndex === 4) {
                cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
                cy.wait(1000)
                cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
                cy.wait(2000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Validate')]").should('have.text', 'Validate').click()
                cy.wait(1000)
            }
        })
    })

    Cypress.on("uncaught: exception", ()=> false)
})