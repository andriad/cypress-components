/// <reference types="cypress" />

describe('Modal test', () => {
    beforeEach(() => {
      cy.visit('../js/scroll-to-top.html');
    })

    it("should open the modal window", () => {
        cy.dataCy('scroll').click();
        cy.dataCy('scrollTo').should('be.visible');
    })

})