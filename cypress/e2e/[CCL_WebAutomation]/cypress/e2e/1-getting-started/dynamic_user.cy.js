describe("dynamic_user", function(){
    const user_ids = [{
        userName : "init.user"
    }, {
        userName : "hod.user"
    }, {
        userName : "gm.user"
    }];

    beforeEach("login", ()=>{
        cy.viewport(1360,760)
        cy.visit('http://192.168.3.187:7071/web/login')     //url 

    user_ids.forEach(user => {
        it(`should login with userName: ${user.userName}`,()=>{
            cy.get('#login').type(user.userName)       // user input          
            cy.get('#password').type('1234')       // password input
            cy.get('.btn').click()                // loggin button clickcy.wait(1000)
            cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
            cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase
            cy.wait(1000)    
        })
    })
    })

    it("PR Initiator", function(){
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
    })

    it("HOD", function(){
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text','Approve')
        cy.xpath("(//span[contains(.,'Cancel')])").should('have.text','Cancel')
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
    })

    it("GM", function(){
        cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text','Approve')
        cy.xpath("(//span[contains(.,'Cancel')])").should('have.text','Cancel')
        cy.xpath("(//span[contains(.,'Approve')])[1]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Close')])").should('have.text','Close')
    })
})