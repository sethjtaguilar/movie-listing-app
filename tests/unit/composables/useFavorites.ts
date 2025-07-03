import { useFavorites } from '@/composables/useFavorites'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { Movie } from '@/types/movie'

describe('useFavorites', () => {
  // Mock movie data
  const mockMovie: Movie = {
    Title: 'Test Movie',
    Year: '2020',
    imdbID: '1',
    Type: 'movie',
    Poster: ''
  }

  beforeEach(() => {
    // Clear localStorage and reset mocks before each test
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('initializes with empty favorites', () => {
    const { favorites } = useFavorites()
    expect(favorites.value).toEqual([])
  })

  it('loads favorites from localStorage', () => {
    // Setup mock localStorage data
    localStorage.setItem('movie-favorites', JSON.stringify([mockMovie]))

    const { favorites } = useFavorites()
    expect(favorites.value).toEqual([mockMovie])
  })

  it('toggles favorites correctly', () => {
    const { favorites, toggleFavorite, isFavorite } = useFavorites()

    // Add to favorites
    toggleFavorite(mockMovie)
    expect(favorites.value).toContainEqual(mockMovie)
    expect(isFavorite(mockMovie.imdbID)).toBe(true)

    // Remove from favorites
    toggleFavorite(mockMovie)
    expect(favorites.value).not.toContainEqual(mockMovie)
    expect(isFavorite(mockMovie.imdbID)).toBe(false)
  })

  it('persists favorites to localStorage', () => {
    const setItemSpy = vi.spyO
