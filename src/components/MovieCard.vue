<template>
  <v-card data-cy="movie-card" class="movie-card" elevation="2">
    <v-card-text class="pa-6">
      <h3 class="mb-2 mr-12 ml-6">{{ movie.Title }}</h3>

      <div class="d-flex justify-space-between align-end">
        <span class="text-caption">{{ movie.Year }}</span>
        <br/>
      </div>

      <div class="d-flex justify-space-between align-end">
        <h6 class="imdb-id text-secondary">IMDb ID: {{ movie.imdbID }}</h6>
      </div>

    </v-card-text>
    <v-btn
    icon
    variant="plain"
    size="small"
    :color="isFavorite ? 'red' : 'grey-lighten-1'"
    class="favorite-btn"
    flat
    :ripple="false"
    @click.stop="toggleFavorite(movie)"
  >
    <v-icon>{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
  </v-btn>
  </v-card>

</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie'

const props = defineProps<{
  movie: Movie
  isFavorite: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle-favorite', movie: Movie): void
}>()

const toggleFavorite = (movie: Movie) => {
  emit('toggle-favorite', movie)
}
</script>

<style scoped>
.movie-card {
  transition: transform 0.3s ease;
  height: 100%;
  min-height: 160px;
}

.movie-card:hover {
  transform: translateY(-3px);
}

.favorite-btn {
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
}

.imdb-id {
    position: absolute;
    bottom: 10px;
    left: 15px;
    cursor: pointer;
}

.favorite-btn:hover :deep(.v-icon) {
  background-color: transparent !important;
}
</style>
