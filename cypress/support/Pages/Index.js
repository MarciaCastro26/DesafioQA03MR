//Ações de interação com a página

// acessar o site Totvs
const el = require('./elementos').ELEMENTS

class Totvs {
    acessarTotvs() {
        cy.visit('https://totvs.store/br/');
    }
}
export default new Totvs();

// Ações de interação com a página
// buscar um produto de lógica de programação
// acessar o site Totvs
// preencher campo de busca
// clicar enter
const el = require('./elementos').ELEMENTS

class Procurar {

    preencherProduto() {
        cy.get('#search').type('treinamento lógica de programação{enter}')
    }
}
export default new Produto();

//Acessar e encontrar um produto

// acessar o site
// buscar um produto referente a lógica de programação
// clicar na lupa para procurar produto
// clicar no produto que escolher

const el = require('./elementos').ELEMENTS

class Totvs {
    acessarTotvs() {
        cy.visit('https://totvs.store/br/');
    }
}