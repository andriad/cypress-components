/// <reference types="cypress" />

describe('Modal test', () => {
    beforeEach(() => {
      cy.visit('../js/modal.html');
    })

    it("should open the modal window", () => {
        cy.dataCy('openModal').click();
        cy.dataCy('openModal').should('be.visible');
    })

    it("should close the modal window", () => {
        cy.dataCy('openModal').click();
        cy.dataCy('openModal').should('be.visible');
        cy.get('body').click(0,0);
        cy.dataCy('closeModal').should('not.be.visible')
    })
})