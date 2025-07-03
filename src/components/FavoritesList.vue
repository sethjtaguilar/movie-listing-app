<template>
  <div data-cy="favorites-section" class="favorites-section" v-if="favorites.length > 0">
    <h2 class="text-h5 mb-4">Favorites ({{ favorites.length }})</h2>
    <v-row>
      <v-col
        v-for="movie in favorites"
        :key="movie.imdbID"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <MovieCard
          :movie="movie"
          :is-favorite="true"
          @toggle-favorite="toggleFavorite"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import MovieCard from './MovieCard.vue'
import type { Movie } from '@/types/movie'

defineProps<{
  favorites: Movie[]
  toggleFavorite: (movie: Movie) => void
}>()
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use 'sass:color';

.favorites-section {
  margin-bottom: 3rem;
  padding-top: 2rem;

  h2 {
    color: $primary;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
}
</style>
