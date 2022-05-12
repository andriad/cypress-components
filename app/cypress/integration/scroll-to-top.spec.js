/// <reference types="cypress" />

describe('Modal test', () => {
    beforeEach(() => {
      cy.visit('../js/scroll-to-top.html');
    })

    it("should open the modal window", () => {
        cy.dataCy('scroll').click();
        cy.dataCy('scrollTo').should('be.visible');
        cy.dataCy('scrollTo').click();
        cy.dataCy('scrollTo').should('not.be.visible');
        cy.window().its('scrollY').should('equal', 0);
    })

})