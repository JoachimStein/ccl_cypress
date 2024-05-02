describe("Foreign_Purchase_access_right", function () {

    const foreign_pr_user_ids = [{
        userName: "scm.user",
        role: "SCM Initiator"
    }, {
        userName: "shod.user",
        role: "SCM-HOD"
    }];

    let userIndex; // Define the userIndex variable outside the forEach loop

    foreign_pr_user_ids.forEach((user, index) => {
        it(`User for Foreign Purchase : ${user.role}`, () => {
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
            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
            cy.wait(2000)


            if (userIndex === 0) {
                cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
                cy.wait(1000)
                cy.get("#purchase_base_0").select('Agreement')    //select base
                cy.wait(1000)
                // cy.get("#notesheet_id_0").click()
                // cy.get("#notesheet_id_0").type('NS000').type('{Enter}')  // Notesheet
                // cy.wait(1000)
                // cy.get("#partner_id_0").type("Madina Store").type('{Enter}') // CS
                // cy.wait(1000)
                // cy.get("#rfq_id_0").type("RFQ/00").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#cs_ids_0").type("CS-2024").type('{Enter}')
                // cy.wait(1000)
                cy.get("#purchase_request_id_0").type("PR/00").type("{Enter}")  // Agreement
                cy.wait(1000)
                cy.get("#partner_id_0").type("Madina Store").type('{Enter}')
                cy.wait(1000)
                cy.get("#agreement_id_0").type("VA00").type('{Enter}')
                cy.wait(1000)
                cy.get("#currency_id_0").type("USD").type("{Enter}")
                cy.wait(1000)
                cy.get("#rate_0").type("10.00").type('{Enter}')
                cy.wait(1000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type("20")
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

    it("PI, LC/TT, CI user : Commercial", function () {
        cy.viewport(1360, 760);
        cy.visit('http://192.168.3.227:7071/web/login'); //url
        cy.get('#login').type("commercial.user"); // user input  
        cy.wait(1000);
        cy.get('#password').type('1234'); // password input
        cy.wait(1000);
        cy.get('.btn').click(); // loggin button click
        cy.wait(1000);
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Purchase')]").click(); //Purchase
        cy.wait(1000);

        // Proforma Invoice

        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Proforma Invoice')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)

        var RandomNumber = Math.floor(Math.random() * 100000)             // Random Number variable 
        const formattedNumber = `CCL/PI/${RandomNumber}`; // Customize the format

        cy.get("#name_0").clear()
        cy.get("#name_0").type(formattedNumber)     // Rename 
        cy.wait(1000)
        cy.get("#partner_id_0").type('Madina Store').type('{Enter}')         //Vendor select 
        cy.wait(1000)
        cy.get("#purchase_order_id_0").click()
        cy.wait(1000)
        cy.get("#purchase_order_id_0").type('{Enter}')   //FPO select
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        cy.xpath("//span[contains(.,'Confirm')]").click()
        cy.wait(1000)

        // LC

        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'LC/TT/LCAF')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)

        var RandomNumber = Math.floor(Math.random() * 100000)
        const formattedNumber_lc = `CCL/LC/${RandomNumber}`


        cy.get("#name_0").clear()
        cy.get("#name_0").type(formattedNumber_lc)     // Rename 
        cy.wait(1000)
        cy.get("#partner_id_0").type('Madina Store').type('{Enter}')         //Vendor select 
        cy.wait(1000)
        cy.get("#proforma_invoice_id_0").click()   //PI select
        cy.wait(1000)
        cy.get("#proforma_invoice_id_0").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        cy.xpath("//span[contains(.,'Confirm')]").click()
        cy.wait(2000)

        // Commercial Invoice

        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Commercial Invoice')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)

        var RandomNumber = Math.floor(Math.random() * 100000)
        const formattedNumber_ci = `CCL/CI/${RandomNumber}`


        cy.get("#name_0").clear()
        cy.get("#name_0").type(formattedNumber_ci)     // Rename 
        cy.wait(1000)
        cy.get("#lc_details_id_0").click()  //LC select
        cy.wait(1000)
        cy.get("#lc_details_id_0").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        cy.wait(500)
        cy.xpath("//span[contains(.,'Confirm')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.wait(500)
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        cy.wait(500)
    })

    Cypress.on("uncaught: exception", ()=> false) 
})