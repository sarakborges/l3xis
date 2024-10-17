import { ListItemType } from '@/Utils/Types/List.type'

export type ListComponentType = {
  title: string
  emptyText: string
  moreText: string
  list: Array<ListItemType>
  maxItems: number
  linkTo: string
  linkToAll: string
  url: string
}
