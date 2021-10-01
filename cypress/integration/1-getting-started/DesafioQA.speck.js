/// <reference types="cypress" />

describe('testar acesso a conta plataforma your logo',() => {

    it('Deve abrir uma conta',()=>{
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login')
        cy.get('[#email_create]').type('marciacastro@gmail.com') 
        cy.get('#SubmitCreate > span').click()
        cy.get('#id_gender2').click()
        cy.get('#customer_firstname').type('Márcia')
        cy.get('#customer_lastname').type('Castro')
        cy.get('#email_create').type('marciacastro@gmail.com')
        cy.get('#passwd').type('130751')
        cy.get('#customer_firstname').type('Márcia')
        cy.get('#customer_lastname').type('Castro')
        cy.get('address1').type('Rua Alexandre Almeida, 1428, Ipsep')
        cy.get('#city').type('Recife')
        cy.get('#id_state').select('Florida')
        cy.get('#postcode').type('02021')
        cy.get('#id_country').type('Estados Unidos')
        cy.get('#phone_mobile').type('81999522189')
        cy.get('#alias').type('My adress')
        cy.get('#submitAccount > span').click()

    })
})