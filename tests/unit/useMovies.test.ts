import { mount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'
import type { Movie } from '@/types/movie'

describe('MovieCard', () => {
  const movie: Movie = {
    Title: 'Test Movie',
    Year: '2020',
    imdbID: '1',
    Type: 'movie',
    Poster: ''
  }

  it('renders movie information correctly', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie,
        isFavorite: false
      }
    })

    expect(wrapper.text()).toContain(movie.Title)
    expect(wrapper.text()).toContain(movie.Year)
    expect(wrapper.text()).toContain(movie.imdbID)
  })
})
