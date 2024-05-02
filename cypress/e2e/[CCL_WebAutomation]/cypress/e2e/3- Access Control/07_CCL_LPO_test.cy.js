describe("Local_Purchase_access_right", function () {
    const user_ids = [
    {
        userName: "scm.user",
        role: "SCM Initiator"
    },
    {
        userName: "shod.user",
        role: "SCM-HOD"
    }
];
    let userIndex; // Define the userIndex variable outside the forEach loop

    user_ids.forEach((user, index) => {
        it(`User for Direct Purchase Order : ${user.role}`, () => {
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
            cy.xpath("//a[contains(.,'Purchase')]").click(); //Purchase
            cy.wait(1000);
            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Local Purchase')]").click()
            cy.wait(2000)
            userIndex = index; // Assign the index value to userIndex

            if (userIndex === 0) {
                cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
                cy.wait(1000)
                cy.get("#purchase_base_0").select('Notesheet')    //select
                cy.wait(1000)
                cy.get("#notesheet_id_0").click()
                cy.get("#notesheet_id_0").type('NS000').type('{Enter}')  // Notesheet
                cy.wait(1000)
                // cy.get("#partner_id_0").type("DreamIT Ltd").type('{Enter}') // CS
                // cy.wait(1000)
                // cy.get("#rfq_id_0").type("RFQ/00").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#cs_ids_0").type("CS-2024").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#purchase_request_id_0").type("PR/00").type("{Enter}")  // Agreement
                // cy.wait(1000)
                // cy.get("#partner_id_0").type("DreamIT Ltd").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#agreement_id_0").type("VA00").type('{Enter}')
                // cy.wait(1000)
                cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type("1")
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(500)
                cy.xpath("(//span[contains(.,'Submit')])[1]").should('have.text', 'Submit').click()
                cy.wait(1000)       
            }

            if (userIndex === 1) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(500)
                cy.xpath("//span[contains(.,'Confirm Order')]").should('have.text', 'Confirm Order').click()
                cy.wait(500)
                cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
                cy.wait(500)
                cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
                cy.wait(500)
            }
        })
    })

    Cypress.on('uncaught: exception', () => false)

})