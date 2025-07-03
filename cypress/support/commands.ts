declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Waits for movie cards to load
       */
      waitForMovies(): Chainable<void>
    }
  }
}

Cypress.Commands.add('waitForMovies', () => {
  cy.get('[data-cy="movie-card"]', { timeout: 15000 })
    .should('have.length.at.least', 1)
})
