/// <reference types="cypress" />

describe('Acessar o site',()=>{

    it('Deve escolher um curso',()=>{
        cy.visit('https://www.uninassau.edu.br')
        cy.get('.cc-btn').click()
        cy.get(':nth-child(1) > a > p').click()
        cy.get('.cc-btn').click()
    });

});