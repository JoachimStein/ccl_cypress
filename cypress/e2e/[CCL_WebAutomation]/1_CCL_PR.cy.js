
describe("Comparative Statement", function(){
it('visit', function(){

    //for (let i = 0; i < 2; i++) {       //Repeat run the test 
    cy.viewport(1200, 660)
    cy.visit('http://192.168.3.187:7071/web/login')     //url 
    cy.get('#login').type('qa_user')       // user input
    cy.get('#password').type('1234')       // password input
    cy.get('.btn').click()                // loggin button click
    cy.wait(1000)
    cy.xpath("//i[@class='oi oi-apps']").click()           //menu bar
    cy.xpath("//a[contains(.,'Purchase')]").click()        //Purchase

    for (let i = 0; i < 5; i++) {       //Repeat run the test 
    cy.xpath("//button[contains(.,'New')]").click()         //New
    cy.get("#priority").select('High')                       //Priority
    cy.get("#requisition_type").select('Local Purchase')      //Req Type 
    cy.wait(1000)
    //IT Budget
    cy.get("#budget_id").click().type('IT-Products')     //Req Type 
    cy.wait(1000)
    cy.get("#budget_id").type('{Enter}')
    //Entertainment budget
    //cy.get("#budget_id").click().type('DevOps Budget - Entertainment - CCL Fiscal Year 2023-2024 (10000000.0) (0.0)')     //Req Type 
    //Add a line
    cy.xpath("//a[contains(.,'Add a line')]").click()
    cy.wait(1000)

    //cy.xpath("(//input[@class='o-autocomplete--input o_input'])[4]").type('HeadPhone')
    //Headphone
    cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:first-child").type('HeadPhone')
    //Biscuit
    //cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:first-child").type('Lexus Biscuits')
    cy.wait(1000)
    cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(5)").clear().type('5') 
    cy.wait(1000)
    cy.xpath("//a[contains(.,'Add a line')]").click() //line 2
    cy.wait(1000)
    //Pendrive
    cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:first-child").type('Pendrive 32GB')
    //Mineral water
    //cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:first-child").type('Mineral Water 500 ml')
    cy.wait(1000)
    cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(5)").clear().type('5')
    cy.xpath("//span[contains(.,'Submit')]").click()
    cy.wait(2000)
    cy.xpath("(//span[contains(.,'Approve')])[1]").click()
    cy.wait(2000)
    cy.xpath("(//span[contains(.,'Approve')])[1]").click()
    cy.wait(1000)
    cy.xpath("//a[@href='#'][contains(.,'Purchase Requisition')]").click() 
    cy.xpath("(//span[contains(.,'Requisition Reference')])[1]").should('have.text', 'Requisition Reference')
    




    }







})

})