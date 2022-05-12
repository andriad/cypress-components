/// <reference types="cypress" />

describe('Smart-tag test', () => {
    beforeEach(() => {
      cy.visit('../js/smart-tag.html');
    })

    it("should show tag", () => {
        cy.dataCy('seeMore').trigger('mouseover');
        cy.dataCy('tag').should('be.visible');
    })

    it("should delete tag", () => {
        cy.dataCy('seeMore').trigger('mouseover');
        cy.dataCy('tag').should('be.visible');
        cy.get('body').click(0,0);
        cy.dataCy('tag').should('not.be.visible');
    })
})