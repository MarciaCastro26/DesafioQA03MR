///<reference types="cypress"/>

describe('testar o site Totvs', ()=>{

    it('Deve acessar o site',()=>{
        cy.visit('https://totvs.store/br/')
        cy.get('#btn-cookie-allow > span').click()
    
    });
    
    it('Deve buscar um produto',()=>{
        cy.get('#search').type('treinamento lógica de programação{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-footer > .price-box > .price-show-more').click()
        cy.get('#product-addtocart-button').click() 

    });
});
