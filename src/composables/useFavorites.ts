import { ref, watch } from 'vue'
import type { Movie } from '@/types/movie'

export function useFavorites() {
  const favorites = ref<Movie[]>([])

  const loadFavorites = () => {
    const stored = localStorage.getItem('movie-favorites')
    if (stored) {
      try {
        favorites.value = JSON.parse(stored)
      } catch (e) {
        console.error('Failed to parse favorites', e)
      }
    }
  }

  const saveFavorites = () => {
    localStorage.setItem('movie-favorites', JSON.stringify(favorites.value))
  }

  const toggleFavorite = (movie: Movie) => {
    const index = favorites.value.findIndex(fav => fav.imdbID === movie.imdbID)
    if (index === -1) {
      favorites.value = [...favorites.value, movie] // Create new array for reactivity
    } else {
      favorites.value = favorites.value.filter(fav => fav.imdbID !== movie.imdbID)
    }
  }

  const isFavorite = (id: string) => {
    return favorites.value.some(movie => movie.imdbID === id)
  }

  // Initialize
  loadFavorites()

  // Auto-save changes
  watch(favorites, saveFavorites, { deep: true })

  return {
    favorites,
    toggleFavorite,
    isFavorite
  }
}
