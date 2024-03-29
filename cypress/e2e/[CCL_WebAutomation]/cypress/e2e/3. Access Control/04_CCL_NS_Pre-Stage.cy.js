describe("Access Right Check for Note sheet", function () {
    const user_ids = [
        {
            username: "scm.user",
            role: "SCM Initiator"
        },
        {
            username: "shod.user",
            role: "SCM - HOD"
        },
        {
            username: "md.user",
            role: "Managing Director"
        }
    ]

    let userIndex;

    user_ids.forEach((user, index) => {
        it(`Note sheet : <User Info> ${user.role}`, function () {
            cy.viewport(1400, 780)
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
            cy.xpath("//a[contains(.,'Note sheet')]").click()
            cy.wait(1000)
            userIndex = index

            if (userIndex === 0) {
                cy.xpath("(//button[contains(.,'New')])[2]").click()
                cy.wait(1000)
                cy.get("#vendor_id_0").type("Madina Store").type('{Enter}')
                cy.wait(1000)
                cy.get("#purchase_request_ids_0").type("PR/00").type('{Enter}')
                cy.wait(1000)
                // cy.get("#radio_field_0_rfq").click()
                // cy.wait(1000)
                // cy.get("#rfq_id_0").type("RFQ/00").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#quotation_id_0").type("Q/00").type('{Enter}')
                // cy.wait(1000)        
                cy.get("#currency_id_0").type("BDT").type("{Enter}")
                cy.wait(1000)
                cy.get("#subject_0").type("Automated Testing")
                cy.wait(1000)
                cy.get("#body_0").type("Automated Testing of Notesheet.")
                cy.wait(1000)
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(6)").type("1") // Price
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Submit to Layer-1')]").should('have.text', 'Submit to Layer-1').click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Submit to Layer-2')]").should('have.text', 'Submit to Layer-2').click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(500)
                cy.xpath("(//span[contains(.,'Submit to SCM-HOD')])[1]").should('have.text', 'Submit to SCM-HOD').click()
                cy.wait(1000)
            }

            if (userIndex === 1) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')          //approved by SCM HOD
                cy.wait(2000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve').click()
                cy.wait(1000)
            }

            if (userIndex === 2) {
                cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
                cy.wait(1000)
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')          //approved by SCM HOD
                cy.wait(2000)
                cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve').click()
                cy.wait(1000)
                cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment')   //assertion
                cy.wait(2000)
                cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')   //assertion
                cy.wait(2000)
            }
        })
    })
})