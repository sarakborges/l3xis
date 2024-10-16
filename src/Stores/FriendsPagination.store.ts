import { ref } from 'vue'
import { useRoute } from 'vue-router'

const itemsPerPage = 1
const currentPage = ref(0)
const totalPages = ref(0)
const totalItems = ref(0)
const start = ref(0)
const end = ref(0)
const pagination = ref<Array<number | null>>([])

const getCurrentPage = async () => {
  const route = useRoute()
  const routePage = Number(route.params.page)

  currentPage.value = routePage > 0 ? routePage : 1
}

const updateTotalItems = (newTotalItems: number) => {
  ;(totalPages.value = Math.ceil(newTotalItems / itemsPerPage)),
    (totalItems.value = newTotalItems)
}

const updatePaginationData = async () => {
  start.value = currentPage.value * itemsPerPage - itemsPerPage
  end.value = currentPage.value * itemsPerPage
}

const createPagination = async () => {
  const paginationStart = [1, totalPages.value > 1 ? 2 : null].filter((item) =>
    Boolean(item)
  )

  const paginationMiddle = [
    currentPage.value - 1 > 0 ? currentPage.value - 1 : null,
    currentPage.value,
    currentPage.value + 1 < totalPages.value ? currentPage.value + 1 : null
  ].filter((item) => Boolean(item))

  const paginationEnd = [
    totalPages.value - 1 > 4 ? totalPages.value - 1 : null,
    totalPages.value
  ].filter((item) => Boolean(item))

  pagination.value = [
    ...new Set([...paginationStart, ...paginationMiddle, ...paginationEnd])
  ].sort((a: number | null, b: number | null) =>
    Number(a) > Number(b) ? 1 : 0
  )
}

export default {
  itemsPerPage,
  currentPage,
  totalPages,
  totalItems,
  start,
  end,
  pagination,
  getCurrentPage,
  updatePaginationData,
  updateTotalItems,
  createPagination
}
