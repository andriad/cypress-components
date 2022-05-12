/// <reference types="cypress" />

describe('Todo list test', () => {
    beforeEach(() => {
      cy.visit('../js/todolist.html');
    })

    it("should add 4 todo, delete the second and have 3 todos left", () => {
        cy.dataCy('text').type('Test 1');
        cy.dataCy('submit').click();
        cy.dataCy('text').type('Test 2');
        cy.dataCy('submit').click();
        cy.dataCy('text').type('Test 3');
        cy.dataCy('submit').click();
        cy.dataCy('text').type('Test 4');
        cy.dataCy('submit').click();
        cy.dataCy('deleteTodo').eq(1).click();
        cy.dataCy('deleteTodo').should('have.length', 3);
    })
})