import MovieCard from '@/components/MovieCard.vue'
import type { Movie } from '@/types/movie'

const movie: Movie = {
  Title: 'Test Movie',
  Year: '2020',
  imdbID: '1',
  Type: 'movie',
  Poster: ''
}

describe('MovieCard', () => {
  it('renders correctly', () => {
    cy.mount(MovieCard, {
      props: {
        movie,
        isFavorite: false
      }
    })

    cy.contains(movie.Title).should('be.visible')
    cy.contains(movie.Year).should('be.visible')
    cy.contains(`IMDb ID: ${movie.imdbID}`).should('be.visible')
  })
})
