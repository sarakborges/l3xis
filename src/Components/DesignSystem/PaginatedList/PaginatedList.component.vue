<style lang="sass" src="./PaginatedList.style.scss" scoped />

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'

import { PaginatedListComponentType } from './PaginatedList.type'

import Text from '@/Components/DesignSystem/Text/Text.component.vue'
import Pagination from '@/Components/DesignSystem/Pagination/Pagination.component.vue'

const {
  linkTo,
  linkParams,
  currentPage,
  totalPages,
  start,
  end,
  totalItems,
  pagination,
  getCurrentPage,
  updatePaginationData,
  createPagination
} = defineProps<PaginatedListComponentType>()

const route = useRoute()

onMounted(() => {
  getCurrentPage()
  updatePaginationData()
  createPagination()
})

onUpdated(() => {
  if (currentPage === Number(route.params.page)) {
    return
  }

  getCurrentPage()
  updatePaginationData()
})
</script>

<template>
  <section class="paginated-list">
    <Text as="h2" v-if="start + 1 !== (end > totalItems ? totalItems : end)"
      >Results {{ start + 1 }}-{{ end > totalItems ? totalItems : end }} of
      {{ totalItems }}</Text
    >

    <Text as="h2" v-if="start + 1 === (end > totalItems ? totalItems : end)"
      >Result {{ start + 1 }} of {{ totalItems }}</Text
    >

    <Pagination
      :linkTo="linkTo"
      :linkParams="linkParams"
      :currentPage="currentPage"
      :totalPages="totalPages"
      :pagination="pagination"
    />

    <slot></slot>

    <Pagination
      :linkTo="linkTo"
      :linkParams="linkParams"
      :currentPage="currentPage"
      :totalPages="totalPages"
      :pagination="pagination"
    />
  </section>
</template>
