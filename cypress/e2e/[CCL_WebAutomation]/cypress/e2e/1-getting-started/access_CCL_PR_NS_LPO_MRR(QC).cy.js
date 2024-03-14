describe("mrr(qc)_testsuite", function(){
    it("process_flow_dp", function(){
        // Define View
        cy.viewport(1260,720)

        // Login for PR-Initiator
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("init.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)

        // Purchase Requisition as PR Initiator
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
        cy.xpath("//span[contains(.,'Submit')]").click()
        cy.wait(1000)

        // Login for HOD

        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("hod.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)


        // Purchase Requisition as HOD
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text','Approve')
        cy.xpath("(//span[contains(.,'Cancel')])").should('have.text','Cancel')
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)

        // Login for GM

        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("gm.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)


        // Purchase Requisition as HOD
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text','Approve')
        cy.xpath("(//span[contains(.,'Cancel')])").should('have.text','Cancel')
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Close')])").should('have.text','Close')

        // Notesheet
        // SCM-Initiator
        //Login
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("scm.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)

        // SCM - Initiator Notesheet
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

        // SCM-HOD
        //Login
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("shod.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)

        // SCM - HOD Notesheet
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Note sheet')]").click()
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)

        // MD
        //Login
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("md.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)

        // MD Notesheet
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Note sheet')]").click()
        cy.wait(1000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.xpath("//span[contains(.,'Close')]").should('have.text','Close')
        cy.wait(1000)


        // Local Purchase Order

        // Login for SCM-Initiator
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("scm.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)

        // Local Purchase for SCM-Initiator
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


        // Login for SCM-HOD
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("shod.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)



        // Local Purchase as SCM_HOD
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Local Purchase')]").click()
        cy.wait(2000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')

        // MRR with QC

        // MRR for MRR Initiator
        // Login for MRR Initiator

        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("mrr.init.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Inventory')]").click()
        cy.wait(1000)

        // MRR as MRR-Initiator

        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
        // cy.wait(1000)
        cy.get("#mrr_type_0").select('Local')         //MRR ID
        cy.get("#purchase_order_id_0").type('LPO/00')
        cy.wait(1000)
        cy.get("#purchase_order_id_0").type('{Enter}')   //PO id select
        cy.wait(1000)
        cy.xpath("//input[@id='qc_required_0']").click()
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Send For Review')]").click()        
        cy.wait(1000)

        //  QC as QC-Initiator_QC-Reviewer
        // login as QC_Initiator
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("qc.init.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Inventory')]").click()
        cy.wait(1000)

        // QC
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

        //QC Approver
        //Login
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("qc.approver.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Inventory')]").click()
        cy.wait(1000)

        // QC Approver

        cy.xpath("(//span[contains(.,'Operations')])[1]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("//a[contains(.,'QC')]").click()    // MRR select 
        cy.wait(2000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approved')])[1]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Closed')]").should('have.text','Closed')
        cy.wait(1000)

        // MRR
        // MRR Reviewer
        // Login
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("mrr.reviewer.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Inventory')]").click()
        cy.wait(1000)

        // MRR Reviewer View

        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
        cy.xpath("(//span[contains(.,'Reviewed')])[1]").click()        
        cy.wait(1000)

        // MRR Approver
        //Login
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type("mrr.approver.user")
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Inventory')]").click()
        cy.wait(1000)


        // Validate
        cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
        cy.wait(1000)
        cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
        cy.wait(2000)
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Validate')]").should("have.text","Validate")
        cy.xpath("//span[contains(.,'Validate')]").click()        
        cy.wait(1000)

        // // Purchase Bill
        // cy.wait(1000)
        // cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        // cy.xpath("//a[contains(.,'Accounting')]").click()        //Accounting
        // cy.xpath("//span[contains(.,'Bills')]").click()    // dropdown
        // cy.wait(1000)
        // cy.xpath("(//a[contains(.,'Purchase Bill')])[1]").click()    // MRR select 
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)
        // cy.get("#purchase_order_id_0").click()
        // cy.wait(200)
        // cy.get("#purchase_order_id_0").type('{Enter}')
        // cy.wait(500)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        // cy.xpath("//span[contains(.,'Cancel')]").should("have.text", "Cancel")
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)


        // // Vouchers ; Journal
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Vouchers')]").click()    // dropdown
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'Journal')]").click()    
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)
        // cy.get("#radio_field_0_purchase").click()
        // cy.wait(1000)
        // cy.get("#selected_bill_ids_0").click()
        // cy.wait(200)
        // cy.get("#selected_bill_ids_0").type('{Enter}')
        // cy.wait(1000)
        // cy.get("#cost_center_id_0").type("Other").type('{Enter}')
        // cy.wait(1000)
        // cy.get("#narrations_0").type("Automated  Testing by @QA_User")
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Submit')])[1]").should("have.text","Submit")
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Submit')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Post')]").should("have.text","Post")
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Post')]").click()
        // cy.wait(1000)


        // // Approval for Payment of Bill
        // cy.xpath("//span[contains(.,'Bills')]").click()    // dropdown
        // cy.wait(1000)
        // cy.xpath("//a[contains(.,'Approval For Payment Of Bill')]").click()    // APB 
        // cy.wait(2000)
        // cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        // cy.wait(1000)
        // cy.get("#partner_id_0").type("DreamIT Ltd").type('{Enter}')
        // cy.wait(1000)
        // cy.get("#account_head_id_0").click()
        // cy.wait(100)
        // cy.get("#account_head_id_0").type('{Enter}')
        // cy.wait(1000)
        // cy.get("#bill_amount_0").type("1000").type('{Enter}')
        // cy.wait(1000)
        // cy.xpath("//span[contains(.,'Submit')]").should("have.text","Submit")
        // cy.wait(200)
        // cy.xpath("//span[contains(.,'Submit')]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").should("have.text","Approve")
        // cy.wait(1000)
        // cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        // cy.wait(1000)


        Cypress.on('uncaught:exception', () => false)
    })
})