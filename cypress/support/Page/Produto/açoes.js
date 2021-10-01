// Ações de interação com a página
// buscar um produto de lógica de programação
// acessar o site Totvs
// preencher campo de busca


const el = require('./elementos').ELEMENTS

class Produto {

    preencherProduto() {
        cy.get(el.id).type('treinamento lógica de programação{enter}')
    }
}

export default new Produto();