describe("CCL Notesheet Access Right", function(){
    it("scm_initiator", function(){
        cy.viewport(1260,720)
        cy.visit("http://192.168.3.187:7071/web/login")
        cy.wait(1000)
        cy.get("#login").type("scm.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(1000)
        cy.get(".btn").click()
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Note sheet')]").click()
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()
        cy.wait(1000)
        cy.get("#vendor_id_0").type("DreamIT Ltd").type('{Enter}')
        cy.wait(1000)
        cy.get("#purchase_request_ids_0").type("PR/00").type('{Enter}')
        cy.wait(1000)
        cy.get("#currency_id_0").type("BDT").type("{Enter}")
        cy.wait(1000)
        cy.get("#subject_0").type("Automated Testing by @SJR")
        cy.wait(1000)
        cy.get("#body_0").type("Automated Testing by @SJR")
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(6)").type("100")
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit to Layer-1')]").should('have.text', 'Submit to Layer-1')
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit to Layer-1')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit to Layer-2')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit to SCM-HOD')]").click()
    })

    it("scm_hod", function(){
            cy.viewport(1260,720)
            cy.visit("http://192.168.3.187:7071/web/login")
            cy.wait(1000)
            cy.get("#login").type("shod.user")
            cy.wait(1000)
            cy.get("#password").type("1234")
            cy.wait(1000)
            cy.get(".btn").click()
            cy.wait(1000)
            cy.xpath("//i[@class='oi oi-apps']").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Purchase')]").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Note sheet')]").click()
            cy.wait(1000)
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
            cy.xpath("//span[contains(.,'Approve')]").should('have.text','Approve')
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Approve')]").click()
            cy.wait(1000)
            // issue
            cy.get("#vendor_id_0").type("DreamIT Ltd").type('{Enter}')
            cy.wait(1000)
            cy.get("#purchase_request_ids_0").type("PR/00").type('{Enter}')
            cy.wait(1000)
            cy.get("#po_type_0").type("Foreign").type('{Enter}')
            cy.wait(1000)
            cy.get("#subject_0").clear()
            cy.get("#subject_0").type("Illegal Change")
            cy.wait(1000)
            cy.get("#body_0").clear()
            cy.get("#body_0").type("Illegal Change")
            cy.wait(1000)
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").type("DevOps").type('{Enter}')
            cy.wait(1000)
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(5)").type("0")
            cy.wait(1000)
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(6)").type("0")
            cy.wait(1000)
            cy.xpath("//button[@class='fa fa-trash-o']").click()
            cy.wait(1000)
        })
})