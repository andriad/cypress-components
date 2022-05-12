/// <reference types="cypress" />

describe('Modal test', () => {
    beforeEach(() => {
      cy.visit('../js/scroll-to-top.html');
    })

    it("should show scroll to top button", () => {
        cy.dataCy('scroll').click();
        cy.dataCy('scrollTo').should('be.visible');
    })

    it("scroll to top should not be visible and the window should be on top", () => {
        cy.dataCy('scroll').click();
        cy.dataCy('scrollTo').should('be.visible');
        cy.dataCy('scrollTo').click();
        cy.dataCy('scrollTo').should('not.be.visible');
        cy.window().its('scrollY').should('equal', 0);
    })

})