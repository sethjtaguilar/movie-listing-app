import { mount } from '@vue/test-utils'
import MovieList from '@/components/MovieList.vue'
import { describe, it, expect, vi } from 'vitest'

describe('MovieList', () => {
  it('shows empty state when no movies', async () => {
    const wrapper = mount(MovieList, {
      props: {
        movies: [],
        loading: false,
        isFavorite: vi.fn(),
        toggleFavorite: vi.fn()
      }
    })

    await wrapper.vm.$nextTick() // Wait for DOM update

    expect(wrapper.find('[data-cy="empty-state"]').isVisible()).toBe(true)
  })
})
