describe('Movie Search', () => {
  beforeEach(() => {
    // Visit the page and wait for it to load
    cy.visit('/', {
      timeout: 10000 // Increased timeout for page load
    })
  })

  it('searches for movies', () => {
    // Use more specific selector and add timeout
    cy.get('[data-cy="search-input"]', { timeout: 10000 })
      .should('be.visible')
      .type('action{enter}')

    // Verify results
    cy.get('[data-cy="movie-card"]', { timeout: 15000 })
      .should('have.length.at.least', 1)
  })
})
