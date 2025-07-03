<template>
  <div class="movie-list">
    <h2 class="text-h5 mb-4">Movies</h2>
    <v-alert
      v-if="movies.length === 0 && !loading"
      type="info"
      class="my-4"
      data-cy="empty-state"
    >
      No movies found. Try searching for something else.
    </v-alert>

    <v-row v-else>
      <v-col
        v-for="movie in movies"
        :key="movie.imdbID"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <MovieCard
          :movie="movie"
          :is-favorite="isFavorite(movie.imdbID)"
          @toggle-favorite="toggleFavorite"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie'
import MovieCard from './MovieCard.vue'

defineProps<{
  movies: Movie[]
  loading: boolean
  isFavorite: (id: string) => boolean
  toggleFavorite: (movie: Movie) => void
}>()
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use 'sass:color';

.movie-list {
  margin: 2rem 0;

  h2 {
    color: $primary;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .empty-state {
    text-align: center;
    padding: 2rem;
  }

  .movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 0;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
}
</style>
