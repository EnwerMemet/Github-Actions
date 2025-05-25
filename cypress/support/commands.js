import elements from  '../fixtures/elements.js'
import contents from  '../fixtures/contents.js'

Cypress.Commands.add("acceptCookies", () => {
    cy.get(elements.accepCookiesButton).click({force: true});
});
