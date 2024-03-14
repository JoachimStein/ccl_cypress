describe("Purchase_access_right", function () {
    const user_ids = [{
        userName: "init.user",
        role: "PR Initiator"
    }, {
        userName: "hod.user",
        role: "Head Of Department"
    }, {
        userName: "gm.user",
        role: "General Manager"
    }];

    const notesheet_user_ids = [{
        userName: "scm.user",
        role: "SCM Initiator"
    }, {
        userName: "shod.user",
        role: "SCM-HOD"
    }, {
        userName: "md.user",
        role: "Managing Director"
    }];

    const foreign_pr_user_ids = [{
        userName: "scm.user",
        role: "SCM Initiator"
    }, {
        userName: "shod.user",
        role: "SCM-HOD"
    }];

    const mrr_user_ids = [
        {
            userName: "mrr.init.user",
            role: "MRR Initiator"
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

    user_ids.forEach((user, index) => {
        it(`User for Purchase Requisition : ${user.role}`, () => {
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
                cy.xpath("(//button[contains(.,'New')])[2]").click()
                cy.wait(1000)
                cy.get("#requisition_type_0").select("Local Purchase")
                cy.wait(1000)
                cy.get("#budget_id_0").type("E").type('{Enter}')
                cy.wait(1000)
                cy.xpath("//a[contains(.,'Add a line')]").click()
                cy.wait(1000)
                cy.get("table.o_list_table>tbody>tr:first-child>td:first-child").type("Confidence Cement")
                cy.wait(1000)
                cy.get("table.o_list_table>tbody>tr:first-child>td:nth-child(5)").type("2")
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Submit')]").should('have.text', 'Submit').click()
                cy.wait(1000)
            }

            if (userIndex === 1) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve')
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").click()
                cy.wait(1000)
            }

            if (userIndex === 2) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve')
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
                cy.wait(1000)
            }

        })
    })

    notesheet_user_ids.forEach((user, index) => {
        it(`User for Note Sheet : ${user.role}`, () => {
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
                cy.xpath("//a[contains(.,'Note sheet')]").click()
                cy.wait(1000)
                cy.xpath("(//button[contains(.,'New')])[2]").click()
                cy.wait(1000)
                cy.get("#vendor_id_0").type("Local Vendor 1").type('{Enter}')
                cy.wait(1000)
                cy.get("#purchase_request_ids_0").type("PR/00").type('{Enter}')
                cy.wait(1000)
                cy.get("#currency_id_0").type("BDT").type("{Enter}")
                cy.wait(1000)
                cy.get("#subject_0").type("Automated Testing")
                cy.wait(1000)
                cy.get("#body_0").type("Automated Testing of Local Purchase.")
                cy.wait(1000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(6)").type("5") // Price
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Submit to Layer-1')]").should('have.text', 'Submit to Layer-1')
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Submit to Layer-1')]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Submit to Layer-2')]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Submit to SCM-HOD')]").click()
                cy.wait(1000)
            }

            if (userIndex === 1) {
                cy.xpath("//span[contains(.,'Orders')]").click()
                cy.wait(1000)
                cy.xpath("//a[contains(.,'Note sheet')]").click()
                cy.wait(1000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").click()
                cy.wait(1000)
            }

            if (userIndex === 2) {
                cy.xpath("//span[contains(.,'Orders')]").click()
                cy.wait(1000)
                cy.xpath("//a[contains(.,'Note sheet')]").click()
                cy.wait(1000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment')
                cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
                cy.wait(1000)
            }
        })
    })

    foreign_pr_user_ids.forEach((user, index) => {
        it(`User for Foreign Purchase : ${user.role}`, () => {
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
            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
            cy.wait(2000)


            if (userIndex === 0) {
                cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
                cy.wait(1000)
                cy.get("#purchase_base_0").select('Notesheet')    // PO base select
                cy.wait(2000)
                cy.get("#notesheet_id_0").click()
                cy.get("#notesheet_id_0").type('NS').type('{Enter}')   //Notesheet select
                cy.wait(1000)
                cy.get("#currency_id_0").type("USD").type("{Enter}")
                cy.wait(1000)
                cy.get("#rate_0").type("10.00").type('{Enter}')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Submit')]").click()
                cy.wait(1000)
            }

            if (userIndex === 1) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Confirm Order')]").click()
                cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
            }
        })
    })

    it("PI, LC/TT, CI", function () {
        cy.viewport(1360, 760);
        cy.visit('http://192.168.3.187:7071/web/login'); //url
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
        cy.get("#partner_id_0").type('Local Vendor 1').type('{Enter}')         //Vendor select 
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
        cy.get("#partner_id_0").type('Local Vendor 1').type('{Enter}')         //Vendor select 
        cy.wait(1000)
        cy.get("#proforma_invoice_id_0").click().type('{Enter}')   //PI select
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
        const formattedNumber_ci = `CCL//${RandomNumber}`


        cy.get("#name_0").clear()
        cy.get("#name_0").type(formattedNumber_ci)     // Rename 
        cy.wait(1000)
        cy.get("#lc_details_id_0").click()  //LC select
        cy.wait(1000)
        cy.get("#lc_details_id_0").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        cy.xpath("//span[contains(.,'Confirm')]").click()
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')

    })

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
                cy.get("#mrr_type_0").select('Foreign')         //MRR ID
                cy.get("#ci_id_0").click()
                cy.wait(500)
                cy.get("#ci_id_0").type('{Enter}')
                cy.wait(1000)
                // cy.xpath("//input[@id='qc_required_0']").click()
                // cy.wait(2000)
                cy.xpath("//span[contains(.,'Send For Review')]").click()
                cy.wait(1000)
                cy.xpath("(//button[contains(.,'Ok')])[1]").click()
                cy.wait(1000)
            }

            if (userIndex === 1) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
                cy.xpath("(//span[contains(.,'Reviewed')])[1]").click()
                cy.wait(1000)
            }

            if (userIndex === 2) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Validate')]").click()
                cy.wait(1000)
            }
        })
    })
})