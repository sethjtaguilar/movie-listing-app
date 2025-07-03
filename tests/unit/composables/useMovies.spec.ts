import { mount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'
import { Movie } from '@/types/movie'

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

  it('emits toggle-favorite event when favorite button is clicked', async () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie,
        isFavorite: false
      }
    })

    await wrapper.find('.favorite-btn').trigger('click')
    expect(wrapper.emitted('toggle-favorite')).toBeTruthy()
    expect(wrapper.emitted('toggle-favorite')?.[0]).toEqual([movie])
  })

  it('shows filled heart when movie is favorite', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie,
        isFavorite: true
      }
    })

    expect(wrapper.find('.mdi-heart').exists()).toBe(true)
  })

  it('shows outline heart when movie is not favorite', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie,
        isFavorite: false
      }
    })

    expect(wrapper.find('.mdi-heart-outline').exists()).toBe(true)
  })
})
