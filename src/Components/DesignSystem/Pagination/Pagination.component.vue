<style lang="sass" src="./Pagination.style.scss" scoped />

<script setup lang="ts">
import { PaginationComponentType } from './Pagination.type'

import Button from '@/Components/DesignSystem/Button/Button.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'

const {
  linkTo,
  linkParams,
  currentPage = 1,
  totalPages = 1,
  pagination = []
} = defineProps<PaginationComponentType>()
</script>

<template>
  <nav v-if="Number(totalPages) > 1">
    <ul class="pagination">
      <li v-for="paginationItem in pagination">
        <Link
          v-if="paginationItem !== currentPage"
          :name="linkTo"
          :params="{ ...linkParams, page: paginationItem }"
          button
        >
          {{ paginationItem }}
        </Link>

        <Button v-if="paginationItem === currentPage" disabled>
          {{ paginationItem }}
        </Button>
      </li>
    </ul>
  </nav>
</template>
