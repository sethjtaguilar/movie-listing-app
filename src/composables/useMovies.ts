import { ref, computed } from 'vue'
import { movieService } from '@/services/movieService'
import type { Movie } from '@/types/movie'

export function useMovies() {
  const movies = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const totalResults = ref(0)
  const searchQuery = ref('')

  const totalPages = computed(() => Math.ceil(totalResults.value / 10))

  const fetchMovies = async (query: string = '', page: number = 1) => {
    loading.value = true
    error.value = null
    searchQuery.value = query
    currentPage.value = page

    try {
      const response = await movieService.searchMovies(query, page)
      movies.value = response.Search
      totalResults.value = parseInt(response.totalResults)
    } catch (err) {
      error.value = 'Failed to fetch movies'
      movies.value = []
      totalResults.value = 0
      console.error('Error fetching movies:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    searchQuery,
    fetchMovies
  }
}
