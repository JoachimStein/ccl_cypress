describe("mrr(qc)_testsuite", function(){
    it("process_flow_dp", function(){
        // Define View
        cy.viewport(1260,720)

        // Login
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("qa_user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)

        // Purchase Requisition
        cy.xpath("(//button[contains(.,'New')])[2]").click()
        cy.wait(1000)
        cy.get("#requisition_type_0").select("Direct Purchase")
        cy.wait(1000)
        cy.get("#budget_id_0").type("E")
        cy.get("#budget_id_0").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Add a line')]").click()
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:first-child").type("Demo Steel")
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(5)").type("2")
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit')]").should('have.text','Submit')
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text','Cancel')
        cy.xpath("//span[contains(.,'Submit')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text','Approve')
        cy.xpath("(//span[contains(.,'Cancel')])").should('have.text','Cancel')
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text','Approve')
        cy.xpath("(//span[contains(.,'Cancel')])").should('have.text','Cancel')
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.xpath("(//span[contains(.,'Close')])").should('have.text','Close')


        // Direct Purchase Order

        // var RandomNumber = Math.floor(Math.random()*100)
        // const formattedNumber = `DPO/VR/DI/${RandomNumber}`

        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Direct Purchase')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#direct_po_base_0").select('Purchase Request')    //select
        cy.wait(1000)
        cy.get("#partner_id_0").type("DreamIT Ltd").type('{Enter}')
        cy.wait(1000)
        // cy.get("#partner_ref_0").type(formattedNumber)
        // cy.wait(1000)
        cy.get("#purchase_request_id_0").click()
        cy.get("#purchase_request_id_0").type('PR').type('{Enter}')
        cy.wait(1000)
        cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(11)").type("1000")
        cy.xpath("//span[contains(.,'Submit')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')

        // // MRR with QC

        // // MRR

        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Inventory')]").click()        //Inventory
        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#mrr_type_0").select('Direct')         //MRR ID
        cy.get("#purchase_order_id_0").type('DPO/00')
        cy.wait(1000)
        cy.get("#purchase_order_id_0").type('{Enter}')   //PO id select
        cy.wait(1000)
        cy.xpath("//input[@id='qc_required_0']").click()
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Send For Review')]").click()        
        cy.wait(1000)

        //  QC

        cy.xpath("(//span[contains(.,'Operations')])[1]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("//a[contains(.,'QC')]").click()    // MRR select 
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#mrr_id_0").type("MRR").type('{Enter}')
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(5)").type("50")
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send For Review')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
        cy.xpath("(//span[contains(.,'Reviewed')])[1]").click()        
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approved')])[1]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Closed')]").should('have.text','Closed')
        cy.wait(1000)

        // MRR
        
        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
        cy.xpath("(//span[contains(.,'Reviewed')])[1]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Validate')]").click()        
        cy.wait(1000)

        // Purchase Bill
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Accounting')]").click()        //Accounting
        cy.xpath("//span[contains(.,'Bills')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'Purchase Bill')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#purchase_order_id_0").click()
        cy.wait(200)
        cy.get("#purchase_order_id_0").type('{Enter}')
        cy.wait(500)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        cy.xpath("//span[contains(.,'Cancel')]").should("have.text", "Cancel")
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)


        // Vouchers ; Journal
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Vouchers')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Journal')]").click()    
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#radio_field_0_purchase").click()
        cy.wait(1000)
        cy.get("#selected_bill_ids_0").click()
        cy.wait(200)
        cy.get("#selected_bill_ids_0").type('{Enter}')
        cy.wait(1000)
        cy.get("#cost_center_id_0").type("Other").type('{Enter}')
        cy.wait(1000)
        cy.get("#narrations_0").type("Automated  Testing by @QA_User")
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Submit')])[1]").should("have.text","Submit")
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Submit')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Post')]").should("have.text","Post")
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Post')]").click()
        cy.wait(1000)


        // Approval for Payment of Bill
        cy.xpath("//span[contains(.,'Bills')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Approval For Payment Of Bill')]").click()    // APB 
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#partner_id_0").type("DreamIT Ltd").type('{Enter}')
        cy.wait(1000)
        cy.get("#account_head_id_0").click()
        cy.wait(100)
        cy.get("#account_head_id_0").type('{Enter}')
        cy.wait(1000)
        cy.get("#bill_amount_0").type("1000").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit')]").should("have.text","Submit")
        cy.wait(200)
        cy.xpath("//span[contains(.,'Submit')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)


        Cypress.on('uncaught:exception', () => false)
    })
})