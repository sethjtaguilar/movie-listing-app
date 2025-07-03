<template>
  <v-row class="search-bar align-center">
    <v-col cols="12" sm="8" md="10">
      <v-text-field
        data-cy="search-input"
        v-model="searchInput"
        @input="handleSearch"
        @keyup.enter="performSearch"
        label="Search..."
        variant="solo-filled"
        hide-details
        density="comfortable"
      />
    </v-col>
    <v-col cols="12" sm="4" md="2" class="pl-sm-2">
      <v-btn
        @click="performSearch"
        color="primary"
        height="48"
        variant="flat"
        block
      >
        Search
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  search: [query: string]
}>()

const searchInput = ref('')

let searchTimeout: ReturnType<typeof setTimeout>

const handleSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    performSearch()
  }, 500)
}

const performSearch = () => {
  emit('search', searchInput.value.trim())
}
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use 'sass:color';

.search-bar {
  margin-bottom: 24px;
}
</style>
