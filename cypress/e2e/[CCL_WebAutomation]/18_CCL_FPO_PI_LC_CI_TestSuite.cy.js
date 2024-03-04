describe("CCL_FPO_PI_LC_CI_TestSuite", function(){
    it('Foreign_Purchase_Order', function(){                //FPO
        cy.viewport(1920, 1480)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)
        cy.get("#purchase_base_0").select('Notesheet')    // PO base select
        cy.wait(2000)
        cy.get("#notesheet_id_0").click()
        cy.get("#notesheet_id_0").type('NS').type('{Enter}')   //Notesheet select
        cy.wait(1000)
        cy.get("#currency_id_0").type("USD").type("{Enter}")
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Submit')]").click()        
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Confirm Order')]").click()
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
        
    })

    // Proforma Invoice Test
    it('PI', ()=>{
        cy.viewport(1920, 1480)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Proforma Invoice')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)

        var RandomNumber = Math.floor(Math.random()*100000)             // Random Number variable 
        const formattedNumber = `CCL/PI/${RandomNumber}`; // Customize the format

        cy.get("#name_0").clear()
        cy.get("#name_0").type(formattedNumber)     // Rename 
        cy.wait(1000)
        cy.get("#partner_id_0").type('DreamIT Ltd').type('{Enter}')         //Vendor select 
        cy.wait(1000)
        cy.get("#purchase_order_id_0").click()
        cy.wait(1000)
        cy.get("#purchase_order_id_0").type('{Enter}')   //FPO select
        cy.wait(2000)
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        cy.xpath("//span[contains(.,'Confirm')]").click()   
        cy.wait(1000)

    })

    // LC/TT
    it('LC', ()=>{
        cy.viewport(1920, 1480)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'LC/TT/LCAF')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)

        var RandomNumber = Math.floor(Math.random()*100000)
        const formattedNumber_lc = `CCL/LC/${RandomNumber}`


        cy.get("#name_0").clear()
        cy.get("#name_0").type(formattedNumber_lc)     // Rename 
        cy.wait(1000)
        cy.get("#partner_id_0").type('DreamIT Ltd').type('{Enter}')         //Vendor select 
        cy.wait(1000)
        cy.get("#proforma_invoice_id_0").click().type('{Enter}')   //PI select
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
        cy.xpath("//span[contains(.,'Confirm')]").click()        
        cy.wait(2000)
 
    })

    // Commercial Invoice Test
    it('CI', ()=>{
        cy.viewport(1920, 1480)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 
        cy.get('#login').type('qa_user')       // user input
        cy.get('#password').type('1234')       // password input
        cy.get('.btn').click()                // loggin button click
        cy.wait(1000)
        cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
        cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Commercial Invoice')]").click()
        cy.wait(2000)
        cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
        cy.wait(1000)

        var RandomNumber = Math.floor(Math.random()*100000)
        const formattedNumber_ci = `CCL/LC/${RandomNumber}`


        cy.get("#name_0").clear()
        cy.get("#name_0").type(formattedNumber_ci)     // Rename 
        cy.wait(1000)
        cy.get("#lc_details_id_0").click()  //LC select
        cy.wait(1000)
        cy.get("#lc_details_id_0").type('{Enter}')
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Reject')]").should('have.text', 'Reject')
        cy.xpath("//span[contains(.,'Confirm')]").click()        
        cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')

        Cypress.on('uncaught:exception', () => false)
    })
 
})