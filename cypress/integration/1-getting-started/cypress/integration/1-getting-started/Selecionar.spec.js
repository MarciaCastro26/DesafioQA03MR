/// <reference types="cypress" />

describe('testar o site lojas renner', ()=>{

    it('Deve selecionar um produto',()=>{
        cy.visit('https://www.lojasrenner.com.br/')
        cy.get('.checkbox-container__label').click()
        cy.get('.search').click()
        cy.get('.input').type('lápis sobrancelhas {enter}')
        cy.get('[data-sku-id="585576637"] > :nth-child(1) > .ProductBox_productBox__1QP1S > .ProductBox_productInfo__2ASOw > .ProductBox_title__s2Ufj').click()

   });

})