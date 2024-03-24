describe("mrr(qc)_testsuite", function(){
    it("process_flow_FPO", function(){
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

        // // Purchase Requisition
        // cy.xpath("(//button[contains(.,'New')])[2]").click()
        // cy.wait(1000)
        // cy.get("#requisition_type_0").select("Foreign Purchase")
        // cy.wait(1000)
        // cy.get("#budget_id_0").type("E")
        // cy.get("#budget_id_0").type('{Enter}')
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'Add a line')]").click()
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:first-child").type("Confidence Cement")
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(5)").type("2")
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Submit')]").should('have.text','Submit')
        // cy.xpath("//span[contains(.,'Cancel')]").should('have.text','Cancel')
        // cy.xpath("//span[contains(.,'Submit')]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text','Approve')
        // cy.xpath("(//span[contains(.,'Cancel')])").should('have.text','Cancel')
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text','Approve')
        // cy.xpath("(//span[contains(.,'Cancel')])").should('have.text','Cancel')
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        // cy.xpath("(//span[contains(.,'Close')])").should('have.text','Close')

        // // Notesheet
        // cy.xpath("//span[contains(.,'Orders')]").click()
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'Note sheet')]").click()
        // cy.wait(1000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()
        // cy.wait(1000)
        // cy.get("#vendor_id_0").type("Local Vendor 1").type('{Enter}')
        // cy.wait(1000)
        // cy.get("#purchase_request_ids_0").type("PR/00").type('{Enter}')
        // cy.wait(1000)
        // cy.get("#currency_id_0").type("BDT").type("{Enter}")
        // cy.wait(1000)
        // cy.get("#subject_0").type("Automated Testing")
        // cy.wait(1000)
        // cy.get("#body_0").type("Automated Testing of Foreign Purchase.")
        // cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(6)").type("5") // Price
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Submit to Layer-1')]").should('have.text', 'Submit to Layer-1')
        // cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Submit to Layer-1')]").click()
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Submit to Layer-2')]").click()
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Submit to SCM-HOD')]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        // cy.xpath("//span[contains(.,'Close')]").should('have.text','Close')
        // cy.wait(1000)

        // // Foreign Purchase 
        
        // cy.xpath("//span[contains(.,'Orders')]").click()
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)
        // cy.get("#purchase_base_0").select('Notesheet')    // PO base select
        // cy.wait(2000)
        // cy.get("#notesheet_id_0").click()
        // cy.get("#notesheet_id_0").type('NS').type('{Enter}')   //Notesheet select
        // cy.wait(1000)
        // cy.get("#currency_id_0").type("USD").type("{Enter}")
        // cy.wait(1000)
        // cy.get("#rate_0").type("10.00").type('{Enter}')
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Submit')]").click()        
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Confirm Order')]").click()
        // cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')

        // // Proforma Invoice

        // cy.xpath("//span[contains(.,'Orders')]").click()
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'Proforma Invoice')]").click()
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)

        // var RandomNumber = Math.floor(Math.random()*100000)             // Random Number variable 
        // const formattedNumber = `CCL/PI/${RandomNumber}`; // Customize the format

        // cy.get("#name_0").clear()
        // cy.get("#name_0").type(formattedNumber)     // Rename 
        // cy.wait(1000)
        // cy.get("#partner_id_0").type('Local Vendor 1').type('{Enter}')         //Vendor select 
        // cy.wait(1000)
        // cy.get("#purchase_order_id_0").click()
        // cy.wait(1000)
        // cy.get("#purchase_order_id_0").type('{Enter}')   //FPO select
        // cy.wait(2000)
        // cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        // cy.xpath("//span[contains(.,'Confirm')]").click()   
        // cy.wait(1000)

        // // LC

        // cy.xpath("//span[contains(.,'Orders')]").click()
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'LC/TT/LCAF')]").click()
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)

        // var RandomNumber = Math.floor(Math.random()*100000)
        // const formattedNumber_lc = `CCL/LC/${RandomNumber}`


        // cy.get("#name_0").clear()
        // cy.get("#name_0").type(formattedNumber_lc)     // Rename 
        // cy.wait(1000)
        // cy.get("#partner_id_0").type('Local Vendor 1').type('{Enter}')         //Vendor select 
        // cy.wait(1000)
        // cy.get("#proforma_invoice_id_0").click().type('{Enter}')   //PI select
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        // cy.xpath("//span[contains(.,'Confirm')]").click()        
        // cy.wait(2000)

        // // Commercial Invoice

        // cy.xpath("//span[contains(.,'Orders')]").click()
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'Commercial Invoice')]").click()
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)

        // var RandomNumber = Math.floor(Math.random()*100000)
        // const formattedNumber_ci = `CCL/LC/${RandomNumber}`


        // cy.get("#name_0").clear()
        // cy.get("#name_0").type(formattedNumber_ci)     // Rename 
        // cy.wait(1000)
        // cy.get("#lc_details_id_0").click()  //LC select
        // cy.wait(1000)
        // cy.get("#lc_details_id_0").type('{Enter}')
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        // cy.xpath("//span[contains(.,'Confirm')]").click()        
        // cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')

        // // MRR with QC

        // // MRR

        // cy.wait(1000)
        // cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        // cy.xpath("//a[contains(.,'Inventory')]").click()        //Inventory
        // cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        // cy.wait(1000)
        // cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)
        // cy.get("#mrr_type_0").select('Foreign')         //MRR ID
        // cy.get("#ci_id_0").click()
        // cy.wait(500)
        // cy.get("#ci_id_0").type('{Enter}')
        // cy.wait(1000)
        // cy.xpath("//input[@id='qc_required_0']").click()
        // cy.wait(2000)
        // cy.xpath("//span[contains(.,'Send For Review')]").click()        
        // cy.wait(1000)

        // //  QC

        // cy.xpath("(//span[contains(.,'Operations')])[1]").click()    // dropdown
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'QC')]").click()    // MRR select 
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)
        // cy.get("#mrr_id_0").type("MRR").type('{Enter}')
        // cy.wait(1000)
        // // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(5)").type("50")
        // // cy.wait(1000)
        // // cy.xpath("//span[contains(.,'Send For Review')]").click()        
        // // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
        // cy.xpath("(//span[contains(.,'Reviewed')])[1]").click()        
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approved')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Close')]").should('have.text','Close')
        // cy.wait(1000)

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
