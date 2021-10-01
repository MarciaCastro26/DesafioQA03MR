///<reference types="cypress"/>
describe("Validação de um produto", () => {
    beforeEach(() => {
        cy.visit("https://totvs.store/");
        cy.get('#search').type('TOTVS Backoffice (Linha Protheus) - lógica de programação{enter}');
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-footer > .price-box > .price-show-more').invoke('text').as('ProdutoEscolhido');
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-footer > .price-box > .price-show-more').click();
        cy.get('#product-price-298 > .price').invoke('text').as('valorProduto');
    })
    it( "Acessar site e pesquisar o produto", function () {
        cy.get('#search').type('TOTVS Backoffice (Linha Protheus) - lógica de programação{enter}');
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-footer > .price-box > .price-show-more').click();
        cy.get('.base').should('contain', this.ProdutoEscolhido);
        cy.get('#product-addtocart-button').click()
        cy.get('.price').should('contain', this.valorProduto);
        cy.get('.product-item-name > a').should('contain', this.ProdutoEscolhido);

    })
})