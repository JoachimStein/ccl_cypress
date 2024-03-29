describe("RFQ_access_right", function () {
    const user_ids = [
        {
            userName: "scm.user",
            role: "SCM Initiator"
        },
        // {
        //     userName: "shod.user",
        //     role: "SCM-HOD"
        // }
    ];
    let userIndex; // Define the userIndex variable outside the forEach loop

    user_ids.forEach((user, index) => {
        it(`User for Request For Quotation : ${user.role}`, () => {
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
            userIndex = index; // Assign the index value to userIndex

            if (userIndex === 0) {
                cy.xpath("//span[contains(.,'Orders')]").click()
                cy.wait(1000)
                cy.xpath("//a[contains(.,'Agreement')]").click()
                cy.wait(1000)
                cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
                cy.wait(1000)
                cy.get("#vendor_id_0").type("Local Vendor 1").type('{Enter}') // Vendor Name
                cy.wait(1000)
                cy.get("#start_date_0").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'10')]").click() // Give Start Date
                cy.wait(1000)
                cy.get("#end_date_0").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'11')]").click() // Give End Date
                cy.wait(1000)
                // cy.get("#active_0").type('{Enter}')  // Active - Inactive
                // cy.wait(1000)
                cy.xpath("//span[contains(.,'Confirm')]").should("have.text", "Confirm")
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Confirm')]").click()
                cy.wait(1000)
            }
        })
    })

    Cypress.on('uncaught: exception', () => false)

})