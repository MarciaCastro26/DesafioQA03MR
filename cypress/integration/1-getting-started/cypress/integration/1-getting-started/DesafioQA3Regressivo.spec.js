///<reference types="cypress" />

describe('testar o site Totvs', ()=>{

    it('Deve acessar o site',()=>{

        cy.visit('https://totvs.store/br/')
        cy.get('#btn-cookie-allow > span').click()
    
    })
    
    it('Deve buscar um produto',()=>{

        cy.get('#search').type('treinamento lógica de programação{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-title').click()

    })
    
    beforeEach(() => {

        cy.visit('https://totvs.store/br/')
        cy.get('#search').type('treinamento lógica de programação{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-title').invoke('text').as('produtoescolhido')
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-footer > .price-box > .price-show-more > span').click()
        cy.get('.price').invoke('text').as('valorproduto')

    })

    it('Validar nome de produto', function () {

        cy.visit('https://totvs.store/br/')
        cy.get('#search').type('treinamento lógica de programação{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-title').click()
        cy.get('.base').should('contain', this.produtoescolhido)
    
    })
    
    it('Adiconar produto ao carrinho, validar nome valor', function() {
        
        cy.visit('https://totvs.store/br/')
        cy.get('#search').type('treinamento lógica de programação{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"]').click()
        cy.get('#product-addtocart-button > span').click()
        cy.get('.option-value > :nth-child(2)').invoke('text').should('contain', this.valorproduto)
        cy.get('.product-item-name > a').should('contain', this.produtoescolhido)

    })

})