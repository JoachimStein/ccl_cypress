describe("dynamic_user", function () {
    const user_ids = [{
        userName: "init.user"
    }, {
        userName: "hod.user"
    }, {
        userName: "gm.user"
    }];

    let userIndex; // Define the userIndex variable outside the forEach loop

    user_ids.forEach((user, index) => {
        beforeEach(() => {
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
        });


        it("PR Initiator", function () {
            if (userIndex === 0) {
                cy.xpath("(//button[contains(.,'New')])[2]").click()
                cy.wait()
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
        })

        it("HOD", function () {
            if (userIndex === 1) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Approve')]").click()
                cy.wait(1000)
            }
        })

        it("GM", function () {
            if (userIndex === 2) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Approve')]").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
                cy.wait(1000)
            }
        })
    })
})
