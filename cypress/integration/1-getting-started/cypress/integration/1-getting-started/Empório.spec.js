/// <reference types="cypress" />

describe('testar acesso a plataforma empório da cerveja',() => {

    it('Deve fazer um login na conta',()=>{    
        cy.viewport(1200,1080)        
        cy.visit('http://www.emporiodacerveja.com.br/')         
        cy.get('.emporiodacerveja-emporio-theme-2-x-ageGateButton').click()        
        cy.get('div.relative > .vtex-button > .vtex-button__label').click()
        cy.get('div.relative > .vtex-button').click()
        cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('marcia.castro@ambevtech.com.br')
        cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('brad23032015!')
        cy.get('.mt0 > :nth-child(1) > [data-testid=container] > .vtex-store-components-3-x-infoCardImageContainer > a > [data-testid=half-image]').click()
        cy.get('#specificationFilter_25-Brasil').click()

    })
})