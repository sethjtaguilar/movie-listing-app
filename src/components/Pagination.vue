<template>
  <div class="pagination" v-if="totalPages > 1">
    <v-pagination
      :model-value="currentPage"
      :length="totalPages"
      :total-visible="7"
      @update:model-value="handlePageChange"
      active-color="#ccc"
      color="primary"
      variant="elevated"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
  (e: 'page-change', page: number): void
}>()

const handlePageChange = (page: number) => {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return
  emit('update:currentPage', page)
  emit('page-change', page)
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 8px;
}

:deep(.v-btn--elevated) {
  cursor: pointer !important;
}

:deep(.v-btn__content) {
  cursor: pointer !important;
}

:deep(.text-primary) {
  cursor: pointer !important;
}

</style>
