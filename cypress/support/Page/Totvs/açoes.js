//Ações de interação com a página
// acessar o site Totvs

const el = require('./elementos').ELEMENTS

class Totvs {
    acessarTotvs() {
        cy.visit('https://totvs.store/br/');
    }
}
export default new Totvs();
