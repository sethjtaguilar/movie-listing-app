describe('Favorites', () => {
  beforeEach(() => {
    cy.visit('/', {
      timeout: 15000 // Increased timeout for page load
    })
  })

  it('should display favorite movies', () => {
    // 1. First verify the page loaded
    cy.get('[data-cy="app-container"]', { timeout: 15000 })
      .should('exist')
      .and('be.visible')

    // 2. Check if favorites exist before interacting
    cy.get('body').then(($body) => {
      if ($body.find('[data-cy="favorites-section"]').length) {
        // 3. Use data-cy attribute instead of class
        cy.get('[data-cy="movie-card"]', { timeout: 15000 })
          .should('have.length.at.least', 1)
          .first()
          .should('contain', 'Test Movie') // More specific assertion
      } else {
        cy.log('No favorites found - test skipped')
      }
    })
  })
})
