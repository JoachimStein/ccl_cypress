describe('TESTING ASSERTION', function () {
    it('Assertion Check', function () {
      cy.viewport(1600, 720)
      cy.visit('http://192.168.3.187:7071/web/login')     //url 
      cy.get('#login').type('md.user')       // user input
      cy.get('#password').type('1234')       // password input
      cy.get('.btn').click()                // loggin button click
      cy.wait(1000)
      cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
      cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
      cy.wait(1000)
  
      // Purchase Requisition
  
      cy.get('table[class="o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped"]>tbody>tr:first-child>td:nth-child(2)').click()
      cy.wait(1000)
      cy.xpath("(//span[contains(.,'Amendment')])[1]").should('not.equal','Amendment')
      cy.wait(500)
      cy.xpath("//span[contains(.,'Close')]").should('not.equal','Close')
      cy.wait(500)
      cy.xpath("(//button[contains(.,'New')])[2]").click()
      cy.wait(1000)
      cy.xpath("//i[@class='fa fa-undo fa-fw']").click() // Discard
      cy.wait(1000)
      cy.xpath("(//button[contains(.,'New')])[2]").click()
      cy.wait(1000)
      cy.xpath("(//span[contains(.,'Submit')])[1]").should('not.equal','Submit')
      cy.wait(500)
      cy.xpath("(//span[contains(.,'Approve')])[1]").should('not.equal','Approve')
      cy.wait(500)
      cy.xpath("(//span[contains(.,'Amendment')])[1]").should('not.equal','Submit')
      cy.wait(500)
      cy.xpath("//span[contains(.,'Cancel')]").should('not.equal','Cancel')
      cy.wait(500)
      cy.xpath("//span[contains(.,'Close')]").should('not.equal','Close')
      cy.wait(500)
      cy.get("#budget_id_0").type("It").type('{Enter}')
      cy.wait(1000)
      cy.get('#requisition_type_0').select("Direct Purchase")
      cy.wait(1000)
      cy.xpath("//a[contains(.,'Add a line')]").click()
      cy.wait(1000)
      cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:first-child").type("Confidence Cement")
      cy.wait(1000)
      cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(5)").type("1")
      cy.wait(1000)
      cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click() // Save Manually
      cy.wait(500)
  
    
      // Direct Purchase
  
      cy.xpath("//span[contains(.,'Orders')]").click()
      cy.wait(1000)
      cy.xpath("//a[contains(.,'Direct Purchase')]").click() // Go to note sheet
      cy.wait(1000)
      cy.xpath("(//button[contains(.,'New')])[2]").click() // Click New Button
      cy.wait(1000)
      cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click() // Check Save Manually Button
      cy.wait(500)
      cy.xpath("//i[@class='fa fa-undo fa-fw']").click() // Check Discard or Undo Button
      cy.wait(1000)
      cy.xpath("(//button[contains(.,'New')])[2]").click() // Click New Button {Process Begins}
      cy.wait(1000)
      // var RandomNumber = Math.floor(Math.random()*100)
      // const formattedNumber = `DPO/VR/DI/${RandomNumber}`
      cy.get("#direct_po_base_0").select('Note Sheet')    //select
      cy.wait(1000)
      // cy.get("#partner_ref_0").type(formattedNumber)
      // cy.wait(1000)
      cy.get("#notesheet_id_0").click()
      cy.get("#notesheet_id_0").type('NS000').type('{Enter}')
      cy.wait(1000)
  
      for (let i = 0; i < 2; i++) {
  
        cy.xpath("//span[contains(.,'Submit')]").should("have.text", 'Submit') // Assertion : Submit
        cy.xpath("//span[contains(.,'Cancel')]").should("have.text", "Cancel") // Assertion : Cancel
        cy.xpath("//span[contains(.,'Submit')]").click() // Click : Submit
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").should("have.text", 'Confirm Order') // Assertion : Confirm Order
        cy.xpath("//span[contains(.,'Cancel')]").should("have.text", "Cancel") // Assertion : Cancel
        cy.xpath("//span[contains(.,'Confirm Order')]").click() // Click : Confirm Order
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment') // Assertion : Amendment
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close') // Assertion : Close
  
        if (i === 0) {
          cy.xpath("(//span[contains(.,'Amendment')])[1]").click() // Assertion : Amendment
          cy.wait(1000)
          cy.xpath("//button[contains(.,'Ok')]").click()
          cy.wait(1000)
        }
      }
      cy.xpath("//span[contains(.,'Close')]").click() // Click : Close
      cy.wait(1000)
      cy.xpath("//button[contains(.,'Ok')]").click()
      cy.wait(1000)
  
      // Local Purchase
  
      cy.xpath("//span[contains(.,'Orders')]").click()
      cy.wait(500)
      cy.xpath("//a[contains(.,'Local Purchase')]").click()
      cy.wait(500)
      cy.xpath("(//button[contains(.,'New')])[2]").click()
      cy.wait(500)
      cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click() // Check Save Manually Button
      cy.wait(500)
      cy.xpath("//i[@class='fa fa-undo fa-fw']").click() // Check Discard or Undo Button
      cy.wait(1000)
      cy.xpath("(//button[contains(.,'New')])[2]").click() // Click New Button {Process Begins}
      cy.wait(1000)
      cy.get("#purchase_base_0").select('Notesheet')    //select
      cy.wait(1000)
      cy.get("#notesheet_id_0").click()
      cy.get("#notesheet_id_0").type('NS000').type('{Enter}')
      cy.wait(1000)
      for (let i = 0; i < 2; i++) {
  
        cy.xpath("//span[contains(.,'Submit')]").should("have.text", 'Submit') // Assertion : Submit
        cy.xpath("//span[contains(.,'Cancel')]").should("have.text", "Cancel") // Assertion : Cancel
        cy.xpath("//span[contains(.,'Submit')]").click() // Click : Submit
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").should("have.text", 'Confirm Order') // Assertion : Confirm Order
        cy.xpath("//span[contains(.,'Cancel')]").should("have.text", "Cancel") // Assertion : Cancel
        cy.xpath("//span[contains(.,'Confirm Order')]").click() // Click : Confirm Order
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment') // Assertion : Amendment
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close') // Assertion : Close
  
        if (i === 0) {
          cy.xpath("(//span[contains(.,'Amendment')])[1]").click() // Assertion : Amendment
          cy.wait(1000)
          cy.xpath("//button[contains(.,'Ok')]").click()
          cy.wait(1000)
        }
      }
      cy.xpath("//span[contains(.,'Close')]").click() // Click : Close
      cy.wait(1000)
      cy.xpath("//button[contains(.,'Ok')]").click()
      cy.wait(1000)
  
      // Foreign Purchase
      cy.xpath("//span[contains(.,'Orders')]").click()
      cy.wait(500)
      cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
      cy.wait(500)
      cy.xpath("(//button[contains(.,'New')])[2]").click()
      cy.wait(500)
      cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click() // Check Save Manually Button
      cy.wait(500)
      cy.xpath("//i[@class='fa fa-undo fa-fw']").click() // Check Discard or Undo Button
      cy.wait(1000)
      cy.xpath("(//button[contains(.,'New')])[2]").click() // Click New Button {Process Begins}
      cy.wait(1000)
      cy.get("#purchase_base_0").select('Agreement')    // FPO base select
      cy.wait(2000)
      cy.get("#purchase_request_id_0").click()
      cy.wait(1000)
      cy.get("#purchase_request_id_0").type('{Enter}')   // Agreement Reference select
      cy.wait(1000)
      cy.get("#currency_id_0").type("USD").type("{Enter}")
      cy.wait(1000)
      cy.get("#rate_0").type("10.00").type('{Enter}')
      cy.wait(1000)
      cy.get("#partner_id_0").type("Local Vendor 1").type('{Enter}')
      cy.wait(1000)
      cy.get("#agreement_id_0").type("VA00")
      cy.wait(500)
      cy.get("#agreement_id_0").type('{Enter}')
      cy.wait(1000)
      cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type('2')
      cy.wait(1000)
      for (let i = 0; i < 2; i++) {
  
        cy.xpath("//span[contains(.,'Submit')]").should("have.text", 'Submit') // Assertion : Submit
        cy.xpath("//span[contains(.,'Cancel')]").should("have.text", "Cancel") // Assertion : Cancel
        cy.xpath("//span[contains(.,'Submit')]").click() // Click : Submit
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").should("have.text", 'Confirm Order') // Assertion : Confirm Order
        cy.xpath("//span[contains(.,'Cancel')]").should("have.text", "Cancel") // Assertion : Cancel
        cy.xpath("//span[contains(.,'Confirm Order')]").click() // Click : Confirm Order
        cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment') // Assertion : Amendment
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close') // Assertion : Close
  
        if (i === 0) {
          cy.xpath("(//span[contains(.,'Amendment')])[1]").click() // Assertion : Amendment
          cy.wait(1000)
          cy.xpath("//button[contains(.,'Ok')]").click()
          cy.wait(1000)
        }
      }
      cy.xpath("//span[contains(.,'Close')]").click() // Click : Close
      cy.wait(1000)
      cy.xpath("//button[contains(.,'Ok')]").click()
      cy.wait(1000)
    
  
  
      // Uncaught Exception
      Cypress.on('uncaught:exception', () => false)
  
    })
  })