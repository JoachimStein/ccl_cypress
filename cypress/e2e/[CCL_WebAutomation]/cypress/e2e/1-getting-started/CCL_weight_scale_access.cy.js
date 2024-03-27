const { it } = require("mocha");

describe("Weight Scale Access Right Testing", function () {
    const user_ids = [{
        user_name: 'vat.user',
        role: 'VAT'
    }, {
        user_name: 'transport.user',
        role: 'Transport'
    }, {
        user_name: 'ws.init',
        role: 'Weight Scale Initiator'
    }, {
        user_name: 'hod.store',
        role: 'Head of Department Store'
    }]

    let userIndex;

    user_ids.forEach((user, index) => {
        it(`Weight Scale User : ${user.role}`, function () {
            cy.viewport(1400, 780);
            cy.visit('http://192.168.3.187:7071/web/login'); //url
            cy.get('#login').type(user.user_name); // user input  
            cy.wait(1000);
            cy.get('#password').type('1234'); // password input
            cy.wait(1000);
            cy.get('.btn').click(); // loggin button click
            cy.wait(1000);
            cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
            cy.wait(1000);
            cy.xpath("//a[contains(.,'Weight Scale')]").click(); //Purchase
            cy.wait(1000);
            userIndex = index; // Assign the index value to userIndex

            if (userIndex === 0) {
                // cy.xpath("(//a[contains(.,'Allocation Number')])[1]").should('have.text', 'Allocation Number')
                // cy.wait(1000)
                // cy.xpath("(//a[contains(.,'Allocation Number')])[1]").click()
                // cy.wait(1000)
                // cy.xpath("(//button[contains(.,'New')])[2]").click()
                // cy.wait(1000)
                // cy.xpath("(//span[contains(.,'Confirm')])[1]").should('have.text', 'Confirm')
                // cy.wait(1000)
                // cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                // cy.wait(1000)
                // cy.get("#src_location_id_0").type('WH/Stock').type('{Enter}')
                // cy.wait(1000)
                // cy.get("#dest_location_id_0").type('WH/Stock').type('{Enter}')
                // cy.wait(1000)
                // cy.get("#purchase_id_0").click()
                // cy.wait(1000)
                // cy.get("#purchase_id_0").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#driver_id_0").click()
                // cy.wait(1000)
                // cy.get("#driver_id_0").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#vehicle_id_0").click()
                // cy.wait(1000)
                // cy.get("#vehicle_id_0").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#helper_id_0").click()
                // cy.wait(1000)
                // cy.get("#helper_id_0").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#vehicle_weight_0").type('1000').type('{Enter}')
                // cy.wait(1000)
                // cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click()
                // cy.wait(1000)
                // cy.xpath("(//span[contains(.,'Confirm')])[1]").click()
                // cy.wait(1000)
                // cy.xpath("//span[contains(.,'Close')]").should('not.exist', 'Close')
                // cy.wait(1000)
                // cy.xpath("//span[contains(.,'Reports')]").should('have.text', 'Reports')
                // cy.wait(1000)
                // cy.xpath("//span[contains(.,'Reports')]").click()
                // cy.wait(1000)
                // cy.xpath("(//a[contains(.,'Weight Scale Reports (Summary)')])[1]").click()
                // cy.wait(1000)
                // cy.xpath("//span[contains(.,'Print')]").click()
                // cy.wait(2000)
                // cy.xpath("(//a[contains(.,'Allocation Number')])[2]").click()
                // cy.wait(1000)
                // cy.xpath("//span[contains(.,'Reports')]").click()
                // cy.wait(1000)
                // cy.xpath("//a[contains(.,'Weight Detail (Raw Material)')]").click()
                // cy.wait(1000)
                // cy.xpath("//span[contains(.,'Print')]").click()
                // cy.wait(2000)
                // cy.xpath("(//a[contains(.,'Allocation Number')])[2]").click()
                // cy.wait(1000)
            }

            if (userIndex === 1) {
                cy.xpath("(//a[contains(.,'Allocation Number')])[1]").should('have.text', 'Allocation Number')
                cy.wait(1000)
                cy.xpath("(//a[contains(.,'Allocation Number')])[1]").click()
                cy.wait(1000)
                cy.xpath("(//button[contains(.,'New')])[2]").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Confirm')])[1]").should('have.text', 'Confirm')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(1000)
                cy.get("#src_location_id_0").type('WH/Stock').type('{Enter}')
                cy.wait(1000)
                cy.get("#dest_location_id_0").type('WH/Stock').type('{Enter}')
                cy.wait(1000)
                cy.get("#purchase_id_0").click()
                cy.wait(1000)
                cy.get("#purchase_id_0").type('{Enter}')
                cy.wait(1000)
                cy.get("#driver_id_0").click()
                cy.wait(1000)
                cy.get("#driver_id_0").type('{Enter}')
                cy.wait(1000)
                cy.get("#vehicle_id_0").click()
                cy.wait(1000)
                cy.get("#vehicle_id_0").type('{Enter}')
                cy.wait(1000)
                cy.get("#helper_id_0").click()
                cy.wait(1000)
                cy.get("#helper_id_0").type('{Enter}')
                cy.wait(1000)
                cy.get("#vehicle_weight_0").type('1000').type('{Enter}')
                cy.wait(1000)
                cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Confirm')])[1]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Close')]").should('not.exist', 'Close')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Reports')]").should('have.text', 'Reports')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Reports')]").click()
                cy.wait(1000)
                cy.xpath("(//a[contains(.,'Weight Scale Reports (Summary)')])[1]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Print')]").click()
                cy.wait(2000)
                cy.xpath("(//a[contains(.,'Allocation Number')])[2]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Reports')]").click()
                cy.wait(1000)
                cy.xpath("//a[contains(.,'Weight Detail (Raw Material)')]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Print')]").click()
                cy.wait(2000)
                cy.xpath("(//a[contains(.,'Allocation Number')])[2]").click()
                cy.wait(1000)
            }

            if (userIndex === 2) {
                cy.xpath("(//a[contains(.,'Allocation Number')])[1]").should('not.exist', 'Allocation Number')
                cy.wait(1000)
                cy.xpath("(//a[contains(.,'Weight Scale')])[2]").click()
                cy.wait(1000)
                cy.xpath("(//button[contains(.,'New')])[2]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(1000)
                cy.get("#allocation_id_0").click()
                cy.wait(1000)
                cy.get("#allocation_id_0").type('{Enter}')
                cy.wait(1000)
                cy.get("#allocation_line_id_0").click()
                cy.wait(1000)
                cy.get("#allocation_line_id_0").type('{Enter}')
                cy.wait(1000)
                cy.get("#weight_machine_id_0").click()
                cy.wait(1000)
                cy.get("#weight_machine_id_0").type('{Enter}')
                cy.wait(1000)
                cy.get("#description_0").type("Automated Testing").type('{Enter}')
                cy.wait(1000)
                cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click()  // Save Manually
                cy.wait(1000)
                // cy.xpath("//i[@class='fa fa-undo fa-fw']").click()   // Discard Changes
                // cy.wait(1000)
                cy.xpath("(//i[@class='o_button_icon fa fa-fw fa-solid fa-database'])[1]").click()
                cy.wait(1000)
                cy.xpath("//button[contains(.,'Ok')]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Calculate')]").click()
                cy.wait(1000)
                cy.xpath("//button[contains(.,'Ok')]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Reports')]").should('have.text', 'Reports')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Reports')]").click()
                cy.wait(1000)
                cy.xpath("(//a[contains(.,'Weight Scale Reports (Summary)')])[1]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Print')]").click()
                cy.wait(2000)
                cy.xpath("(//a[contains(.,'Weight Scale')])[2]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Reports')]").click()
                cy.wait(1000)
                cy.xpath("//a[contains(.,'Weight Detail (Raw Material)')]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Print')]").click()
                cy.wait(2000)
                cy.xpath("(//a[contains(.,'Weight Scale')])[2]").click()
                cy.wait(1000)
            }

            if (userIndex === 3) {
                cy.xpath("//span[contains(.,'Print')]").click()
                cy.wait(2000)
            }

        })
    })




    Cypress.on("uncaught:exception", () => false)
})