// <reference types="cypress"> />

describe('Login Amazon', () => {

    it('Entrar com um e-mail não cadastrado', () => {
          cy.visit('https://www.amazon.com.br/');
          cy.get('#twotabsearchtextbox').type('samsung s10{enter}')
          cy.get('[data-asin="B07SKC29CM"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > :nth-child(3) > .a-section > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
          cy.get('#wishListMainButton > .a-button-inner > .a-button-text').click()
          cy.get('#ap_email').type('Falta aqui{enter}')
          cy.get('.a-list-item').contains('Não encontramos uma conta associada a este endereço de e-mail')
       
        }); 
        it('Entrar com a senha incorreta', () => {
            cy.visit('https://www.amazon.com.br/');
            cy.get('#twotabsearchtextbox').type('samsung s10{enter}')
            cy.get('[data-asin="B07SKC29CM"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > :nth-child(3) > .a-section > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
            cy.get('#wishListMainButton > .a-button-inner > .a-button-text').click()
            cy.get('#ap_email').type('colocar o e-mail certo aqui{enter}')
            cy.get('#ap_password').type('colocar uma senha imcorreta aqui{enter}')
            cy.get('.a-list-item').contains('Sua senha está incorreta')
                   }); 

        it('Entrar com e-mail e senha corretos', () => {
            cy.visit('https://www.amazon.com.br/');
            cy.get('#twotabsearchtextbox').type('samsung s10{enter}')
            cy.get('[data-asin="B07SKC29CM"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > :nth-child(3) > .a-section > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
            cy.get('#wishListMainButton > .a-button-inner > .a-button-text').click()
            cy.get('#ap_email').type(' Falta aqui {enter}')
            cy.get('#ap_password').type('colocar a senha correta{enter}')
            cy.get('#productTitle').contains('Samsung')
                   }); 
    }); 
