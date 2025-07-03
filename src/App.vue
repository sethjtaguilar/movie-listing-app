<template>
  <v-app>
    <v-main class="app-main">
      <v-container data-cy="app-container">
        <SearchBar
          @search="handleSearch"
          :loading="loading"
        />

        <FavoritesList
          v-if="favorites.length > 0"
          :favorites="favorites"
          :toggle-favorite="toggleFavorite"
        />

        <div v-if="loading" class="loading-centered">
          <v-progress-circular
            indeterminate
            color="primary"
          />
        </div>

        <v-alert
          v-else-if="error"
          type="error"
          class="my-4"
        >
          {{ error }}
        </v-alert>

        <template v-else>
          <MovieList
            :loading="loading"
            :movies="movies"
            :is-favorite="isFavorite"
            :toggle-favorite="toggleFavorite"
          />

          <Pagination
            v-if="totalPages > 1"
            v-model:current-page="currentPage"
            :total-pages="totalPages"
            @page-change="handlePageChange"
          />
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
import Pagination from '@/components/Pagination.vue'
import FavoritesList from '@/components/FavoritesList.vue'
import { useMovies } from '@/composables/useMovies'
import { useFavorites } from '@/composables/useFavorites'

const {
  movies,
  loading,
  error,
  currentPage,
  totalPages,
  searchQuery,
  fetchMovies
} = useMovies()

const { favorites, isFavorite, toggleFavorite } = useFavorites()

// Initial load
onMounted(async () => {
  await fetchMovies('', 1)
})

// Watch for changes in searchQuery or currentPage
watch([searchQuery, currentPage], () => {
  fetchMovies(searchQuery.value, currentPage.value)
})

const handleSearch = (query: string) => {
  searchQuery.value = query
  currentPage.value = 1
}

const handlePageChange = (page: number) => {
  currentPage.value = page
}
</script>

<style lang="scss">
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
}


.favorites-badge {
  background: #e50914;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.9rem;
}

.app-main {
  border-radius: 8px;
  padding: 3rem;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 2rem;
}

.error-state {
  color: #e50914;
}

.loading-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px; // Adjust height as needed
}
</style>
