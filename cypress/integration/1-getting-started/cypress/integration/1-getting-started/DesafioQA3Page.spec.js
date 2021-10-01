///<reference types="cypress" />

describe('DesafioQA3Page.spec.js', ()=>{

    it('Deve acessar o site',()=>{
        // acessar o site Totvs
        cy.visit('https://totvs.store/br/')

    })
    
    it('Deve buscar um produto',()=>{
        // buscar um produto de lógica de programação
        // acessar o site Totvs
        // preencher campo de busca
        cy.visit('https://totvs.store/br/')
        cy.get('#search').type('treinamento lógica de programação{enter}')
        
    })

    it('Acessar e encontrar um produto',()=>{
        // acessar o site
        // buscar um produto referente a lógica de programação
        // clicar na lupa para procurar produto
        // clicar no produto que escolher
        cy.visit('https://totvs.store/br/')
        cy.get('#search').type('treinamento lógica de programação{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-title').click()
    
    })
    
    it('Adicionar produto ao carrinho', ()=>{
        // acessar o site
        // buscar um produto referente a lógica de programação
        // adicionar um produto ao carrinho
        cy.visit('https://totvs.store/br/')
        cy.get('#search').type('treinamento lógica de programação{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"]').click()
        cy.get('#product-addtocart-button > span').click()

    })

})