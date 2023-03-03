/// <reference types="Cypress" />

describe('Logout', () => {

    beforeEach(() => cy.login())

    it('successfully logout', () => {

        cy.logout()

        cy.url().should('be.eql', `${Cypress.config('baseUrl')}/users/sign_in`)

        cy.get('[data-qa-selector="sign_in_button"]')
            .should('be.visible')
    })
})