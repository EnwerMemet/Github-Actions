describe('My First Test', () => {
    it('Visits a page and checks the title', () => {
      cy.visit('https://www.sqills.com/')
      cy.url().should('include', 'https://www.sqills.com/')
    })
  })
  