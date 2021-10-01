///<reference types="cypress"> />

describe('Login Github Loja Virtual Your Logo', () => {

    it('Criar um login na plataforma da loja', () => {
          cy.visit('http://automationpractice.com/index.php/');

          cy.get('.login').click('sign in')

          cy.get('#email_create').type('marciarscastro@gmail.com')
          cy.get('#SubmitCreate > span').click()

          cy.get(':nth-child(3) > .top').click(cy.get('#id_gender1'))
          cy.get('#costumer_namer').type('marciarscastro')
          cy.get('#passwd').type('mrsc2601')
          cy.get('address1').type('Rua Bernardino da Costa, nº100, Imbiribeira, Recife/PE')
          cy.get('#id_state').select('Florida')
          cy.get('#city').type('Recife')
          cy.get('#postcode').type('12478')
          cy.get('#id_country').type('Estados Unidos')
          cy.get('#phone_mobile').type('5581999522189')
          cy.get('#alias').type('Rua Bernardino da Costa')
     
    it(

})