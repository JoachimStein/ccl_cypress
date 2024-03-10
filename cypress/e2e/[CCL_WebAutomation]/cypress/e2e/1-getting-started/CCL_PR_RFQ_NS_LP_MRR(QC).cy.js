describe("mrr(qc)_testsuite", function(){
    it("process_flow_LP", function(){
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
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type('5').type('{Enter}')
        cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(7)").type('60')
        // cy.wait(1000)
        cy.xpath("(//span[contains(.,'Confirm')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.xpath("//span[contains(.,'Close')]").should('have.text','Close')
        cy.xpath("(//span[contains(.,'Quotation')])[1]").click()          //Qoutation button
        cy.get("#partner_ids_0").type('Local Vendor 1').type('{Enter}')         //Vendor select
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Create Quotation')])[1]").should('have.text', 'Create Quotation')   //assertion
        cy.wait(2000)
        cy.xpath("(//span[contains(.,'Create Quotation')])[1]").click()    //save qoatation
        cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Quotation')])[2]").click()          //Qoutation button
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        // cy.wait(1000)
        

        // Notesheet
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Note sheet')]").click()
        cy.wait(1000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()
        cy.wait(1000)
        cy.get("#radio_field_0_rfq").click()
        cy.wait(1000)
        cy.get("#rfq_id_0").type("RFQ/00").type('{Enter}')
        cy.wait(1000)
        cy.get("#quotation_id_0").type("Q/00").type('{Enter}')
        cy.wait(1000)
        cy.get("#currency_id_0").type("BDT").type("{Enter}")
        cy.wait(1000)
        cy.get("#subject_0").type("Automated Testing: PR>RFQ>Q>NS(RFQ)>LPO>MRR(QC)")
        cy.wait(1000)
        cy.get("#body_0").type("Automated Testing: PR>RFQ>Q>NS(RFQ)>LPO>MRR(QC)")
        cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(6)").type("10")
        // cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit to Layer-1')]").should('have.text', 'Submit to Layer-1')
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit to Layer-1')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit to Layer-2')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit to SCM-HOD')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.xpath("//span[contains(.,'Close')]").should('have.text','Close')

        // Local Purchase Order

        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Local Purchase')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#purchase_base_0").select('Notesheet')    //select
        cy.wait(1000)
        cy.get("#notesheet_id_0").click()
        cy.get("#notesheet_id_0").type('NS000').type('{Enter}')
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
