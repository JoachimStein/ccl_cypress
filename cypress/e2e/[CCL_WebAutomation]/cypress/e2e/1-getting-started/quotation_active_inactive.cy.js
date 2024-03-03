// access right check for quotation

describe('ccl_quotation_price_change', function(){
    it('visit', function(){
        cy.viewport(1280,720)
        cy.visit("http://192.168.3.187:7071/web/login")
        cy.wait(1000)
        cy.get('#login').type('scm.user')
        cy.wait(1000)
        cy.get('#password').type('1234')
        cy.wait(1000)
        cy.get('.btn').click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Request For Quotation')]").click()
        cy.wait(1000)
        cy.xpath("//td[contains(.,'RFQ/0000119')]").click()
        cy.wait(1000)
        cy.xpath("(//span[contains(.,'Quotation')])[2]").click()
        cy.wait(1000)
        cy.xpath("//td[contains(.,'Q/0000194')]").click()
        cy.wait(1000)
        cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(8)").type("100")
        cy.wait(1000)
        cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click()
        cy.wait(1000)
        cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(8)").type("50")
        cy.wait(1000)
        cy.xpath("//i[@class='fa fa-cloud-upload fa-fw']").click()
        cy.wait(1000)

        Cypress.on('uncaught:exception', () => false)

    })
})