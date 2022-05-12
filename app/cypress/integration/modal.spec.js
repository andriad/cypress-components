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

    it("should contain an <h2> with Lorem Ipsum", () => {
        cy.dataCy('openModal').click();
        cy.dataCy('openModal').should('be.visible');
        cy.dataCy('modal').find('h2').should('have.text', 'Lorem Ipsum');
    })
})