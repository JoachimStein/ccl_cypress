describe("RFQ_access_right", function () {
    const user_ids = [
    // {
    //     userName: "scm.user",
    //     role: "SCM Initiator"
    // },
    {
        userName: "shod.user",
        role: "SCM-HOD"
    }
];
    let userIndex; // Define the userIndex variable outside the forEach loop

    user_ids.forEach((user, index) => {
        it(`User for Request For Quotation : ${user.role}`, () => {
            cy.viewport(1360, 760);
            cy.visit('http://192.168.3.227:7071/web/login'); //url
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
            userIndex = index; // Assign the index value to userIndex

            if (userIndex === 0) {
                cy.xpath("//span[contains(.,'Orders')]").click()
                cy.wait(1000)
                cy.xpath("//a[contains(.,'Request For Quotation')]").click()
                cy.wait(1000)
                cy.xpath("(//button[contains(.,'New')])[2]").click()
                cy.wait(1000)
                cy.get("#purchase_request_ids_0").type("PR").type('{Enter}')
                cy.wait(1000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type('1').type('{Enter}')
                cy.wait(1000)
                // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(7)").type('60')
                // cy.wait(1000)
                cy.xpath("(//span[contains(.,'Confirm')])[1]").should('have.text', 'Confirm')
                cy.wait(500)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(500)
                cy.xpath("(//span[contains(.,'Confirm')])[1]").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment')
                cy.wait(1000)
                if (user.userName === 'shod.user') {
                    cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
                    cy.wait(1000)
                }
                cy.xpath("(//span[contains(.,'Quotation')])[1]").click()          //Qoutation button
                cy.wait(1000)
                cy.get("#partner_ids_0").type('KN TRADERS').type('{Enter}')         //Vendor select
                cy.wait(1000)
                cy.get("#partner_ids_0").type('Madina Store').type('{Enter}')         //Vendor select
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Create Quotation')])[1]").should('have.text', 'Create Quotation')   //assertion
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(500)
                cy.xpath("(//span[contains(.,'Create Quotation')])[1]").click()    //save qoatation
                cy.wait(1000)
                // cy.xpath("(//span[contains(.,'Quotation')])[2]").click()          //Qoutation button
                // cy.wait(1000)
                // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                // cy.wait(1000)
            }
        })
    })

    Cypress.on('uncaught: exception', () => false)

})