/// <reference types="cypress" />

describe('Modal test', () => {
    beforeEach(() => {
      cy.visit('../js/smart-tag.html');
    })

    it("should show tag", () => {
        cy.dataCy('seeMore').trigger('mouseover');
        cy.dataCy('tag').should('be.visible');
    })

})