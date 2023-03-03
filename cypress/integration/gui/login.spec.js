/// <reference types="Cypress" />

describe('Login', () => {
    it('successfully login', () => {
        cy.login()

        cy.get('.qa-user-avatar')
            .should('exist')
    })
})