/// <reference types="cypress" />

describe('Modal test', () => {
    beforeEach(() => {
      cy.visit('../js/modal.html');
    })

    it("should open the modal window", () => {
        cy.dataCy('openModal').click();
        cy.dataCy('openModal').should('be.visible');
    })
})