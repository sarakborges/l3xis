export type PaginatedListComponentType = {
  linkTo: string
  linkParams: {}
  currentPage?: number
  totalPages?: number
  start: number
  end: number
  totalItems: number
  pagination: Array<number | null>
  getCurrentPage: () => void
  updatePaginationData: () => void
  createPagination: () => void
}
