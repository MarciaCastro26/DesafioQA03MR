/// <reference types="cypress" />

describe('testar acesso a conta plataforma your logo',() => {

    it('Deve abrir uma conta',()=>{
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login')
        cy.get('#SubmitCreate > span').click()
        cy.get(':nth-child(4) > .top').click()
        cy.get('#customer_firstname').type('Marcia')
        cy.get('#customer_lastname').type('Castro')
        cy.get('#email').type('marciacastro@gmail.com')
        cy.get('#passwd').type('vss130751')
        cy.get('#firstname').type('Marcia')
        cy.get('#lastname').type('Castro')
        cy.get('#address1').type('Rua Alexandre Almeida, 1428, Ipsep')
        cy.get('#city').type('Recife')
        cy.get('#id_state').select('Florida')
        cy.get('#postcode').type('02021')
        cy.get('#id_country').type('Estados Unidos')
        cy.get('#phone_mobile').type('81999522189')
        cy.get('#alias').type('My adress')
        cy.get('#submitAccount > span').click()

    });

    it('Navegar pelo menu e realizar uma compra na loja virtual',()=>{
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.block_content > .tree > .last > a').click()
        cy.get('.first-in-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
        cy.get('#color_20').click()
        cy.get('.first-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.button-container > .button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#email').type('marciacastro@gmail.com')
        cy.get('#passwd').type('vss130751')
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.account > span').click()

    });

    it('Verificar o status no histórico da compra',()=>{
        cy.get('#email').type('marciacastro@gmail.com')
        cy.get('#passwd').type('vss130751')
        cy.get('#SubmitLogin > span').click()
        cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span').click()
        cy.get('thead > tr > .footable-last-column').contains('On backorder')
    })
})
