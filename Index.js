// Ações de interação com a página

// acessar o site Totvs

const el = require('./elements').ELEMENTS

class Totvs {
    acessarTotvs() {
        cy.visit('https://totvs.store/br/');
    }
}
export default new Totvs();


// acessar produto
const el = require('./elements').ELEMENTS

class Procurar {
    preencherBusca() {
        cy.get('#search').type('treinamento lógica de programação{enter}');
    }
}
export default new Procurar();


// procurar classe de produto
const el = require('./elementos').ELEMENTS

class Cursologica {
    encontrarProduto() {
        cy.get('[href="https://totvs.store/br/produto/treinamento-logica-de-programac-o.html"] > .product-card-title');
    }
}
export default new Cursologica();

// preencher carrinho
const el = require('./elementos').ELEMENTS

class Meucarrinho {
    acessarTotvs() {
        cy.get('#product-addtocart-button > span');
    }
}
export default new Meucarrinho();
