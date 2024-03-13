describe("ccl_cs", function(){
    it("pr_rfq_cs", function(){
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
        cy.get("#requisition_type_0").select("Local Purchase")
        cy.wait(1000)
        cy.get("#budget_id_0").type("E")
        cy.get("#budget_id_0").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Add a line')]").click()
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:first-child").type("Confidence Cement")
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

        // Request for Quotation
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
        cy.xpath("(//span[contains(.,'Confirm')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.xpath("//span[contains(.,'Close')]").should('have.text','Close')
        cy.xpath("(//span[contains(.,'Quotation')])[1]").click()          //Qoutation button
        cy.get("#partner_ids_0").type('Local Vendor 1').type('{Enter}')         //Vendor select - 1
        cy.wait(1000)
        cy.get("#partner_ids_0").type('Vendor 2').type('{Enter}')         //Vendor select - 2
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Create Quotation')])[1]").should('have.text', 'Create Quotation')   //assertion
        cy.wait(2000)
        cy.xpath("(//span[contains(.,'Create Quotation')])[1]").click()    //save qoatation
        cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Quotation')])[2]").click()          //Qoutation button
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        // cy.wait(1000)

        // Comparative Statement

        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Comparative Statement')]").click()
        cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        // cy.wait(1000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()
        cy.wait(1000)
        cy.get("#request_for_quotation_id_0").clear()
        cy.wait(500)
        cy.get("#request_for_quotation_id_0").type("RFQ")
        cy.wait(500)
        cy.get("#request_for_quotation_id_0").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Compare')]").should("have.text",'Compare')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Compare')]").click()
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'Edit')])[2]").click()
        cy.wait(1000)
        cy.xpath("(//input[@type='text'])[1]").clear().type('1').type('{Enter}')
        cy.wait(1000)
        cy.xpath("(//input[@type='text'])[2]").clear().type('1').type('{Enter}')
        cy.wait(1000)      
        cy.xpath("(//button[contains(.,'Save')])[2]").click()
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'Go Back')])[1]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Send For Approval')]").should('have.text', 'Send For Approval')    //Assertion
        cy.xpath("//span[contains(.,'Send For Approval')]").click()          //send for approval
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Approve')]").should('have.text', 'Approve')    //Assertion
        cy.xpath("//span[contains(.,'Approve')]").click()          //approved by SCM HOD
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Approve')]").click()          //approved by MD
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Amendment')]").should('have.text', 'Amendment')   //assertion
        cy.wait(2000)
        cy.xpath("(//a[contains(.,'Comparative Statement')])[1]").click()    //back to CS list
        cy.wait(500)
        cy.screenshot()
        cy.wait(500)

        // Local Purchase Order

        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Local Purchase')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#purchase_base_0").select('Comparative Statement')    //select
        cy.wait(1000)
        cy.get("#partner_id_0").click()
        cy.get("#partner_id_0").type('Local Vendor 1').type('{Enter}')
        cy.wait(1000)
        cy.get("#rfq_id_0").click()
        cy.wait(500)
        cy.get("#rfq_id_0").type('{Enter}')
        cy.wait(1000)
        cy.get("#cs_ids_0").click()
        cy.wait(500)
        cy.get("#cs_ids_0").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')

        // MRR with QC

        // MRR

        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Inventory')]").click()        //Inventory
        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#mrr_type_0").select('Local')         //MRR ID
        cy.get("#purchase_order_id_0").type('LPO/00')
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

        Cypress.on('uncaught:exception', () => false)

    })
})