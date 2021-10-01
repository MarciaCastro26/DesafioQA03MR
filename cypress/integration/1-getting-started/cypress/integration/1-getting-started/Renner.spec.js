/// <reference types="cypress" />

describe('testar o site lojas renner', ()=>{

    it('Deve logar o cliente',()=>{
        cy.visit('https://www.lojasrenner.com.br/',{failOnStatusCode: false})
        cy.get('.checkbox-container__label').click()
        cy.get(':nth-child(4) > :nth-child(1) > .user-info > div').click({force: true})
        cy.get('.modal-loginRegister').click()
        cy.get(':nth-child(3) > input').type('marciarscastro@gmail.com')
        cy.get(':nth-child(4) > input').type('130751')
        cy.get('.modal-login__form-action > .btn').click()
    });

    it('Deve selecionar um produto',()=>{
        cy.visit('https://www.lojasrenner.com.br/',{failOnStatusCode: false})
        cy.get('.checkbox-container__label').click()
        cy.get('.search').click()
        cy.get('.input').type('lápis sobrancelhas {enter}')
        cy.get('[data-sku-id="585576637"] > :nth-child(1) > .ProductBox_productBox__1QP1S > .ProductBox_productInfo__2ASOw > .ProductBox_title__s2Ufj').click()
    });

    it('Deve selecionar um produto',()=>{
        cy.visit('https://www.lojasrenner.com.br/',{failOnStatusCode: false})
        cy.get('.checkbox-container__label').click()
        cy.get('.search').click()
        cy.get('.input').type('bikini praia {enter}')
        cy.get('[data-sku-id="579571901,579571936,579571910,579571928"] > :nth-child(1) > .ProductBox_productBox__1QP1S > .ProductBox_productInfo__2ASOw > .ProductBox_title__s2Ufj').click()
    });  

     it('Deve selecionar um produto',()=>{
        cy.visit('https://www.lojasrenner.com.br/',{failOnStatusCode: false})
        cy.get('.checkbox-container__label').click()
        cy.get('.search').click()
        cy.get('.input').type('perfume miss dior {enter}')
        cy.get('[data-sku-id="599432482,599432474,599432466"] > :nth-child(1) > .ProductBox_productBox__1QP1S > .ProductBox_productInfo__2ASOw > .ProductBox_title__s2Ufj').click()
    });

    it('Deve comprar um produto',()=>{
        cy.visit('https://www.lojasrenner.com.br/',{failOnStatusCode: false})
        cy.get('.checkbox-container__label').click()
        cy.get('.search').click()
        cy.get('.input').type('lápis sobrancelhas{enter}')
        cy.get('[src="https://img.lojasrenner.com.br/item/585576602/medium/5.jpg"]').click()
        cy.get('.product_price > .buy_button{enter}').click()
        cy.get('#xc984').type('51190360')
        cy.get('.freight > :nth-child(2) > .form_global > .form_item > .button').click()
        cy.get('.end_buy').click()
        cy.get('inputLogin').type('83248110229')
        cy.get('inputPassword').type('123456')
        cy.get(':nth-child(7) > .action_1').click()
        cy.get('.wrap').click()
        cy.get(':nth-child(2) > label > .method-info > :nth-child(2)').select()
        cy.get('.c_d_from > .form_action > .action_1').click()
        cy.get('[data-payment-type="boleto"] > :nth-child(2)').click()
        cy.get('.ticket_finalize').click()
        cy.get('.user-info-wrapper > .client_area > .user_nav > ul > .logout > span').click()
        
    });
});

