import { ListItemType } from '@/Utils/Types/List.type'

export type ListType = {
  title: string
  emptyText: string
  moreText: string
  list: Array<ListItemType>
  maxItems: number
  linkTo: string
}
