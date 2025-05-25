import "cypress-real-events/support";
import elements from '../fixtures/elements.js'
import contents from "../fixtures/contents.js";

describe("", () => {
  beforeEach(() => {
    cy.visit("/"); cy.acceptCookies();
  });

  it("Sqills homepage swipe over", () => {
    cy.get("h1").should("contain", "oving people forwar");
    cy.get(elements.homepageSlider).should("exist").then(($elements) => {
      const count = $elements.length;
      cy.log(`Found ${count} elements`);
      cy.get("h1").contains("Moving people forward");
      Cypress._.each($elements, (el) => { cy.wrap(el).scrollIntoView().realSwipe("toRight"); });
      cy.contains("h2", "A new way to reach your destination with Navigator 2.0");
    });
  });
});

