import { GroupType } from '@/Utils/Types/Group.type'
import { FeedType } from '@/Utils/Types/Feed.type'

export type ProfileType = {
  id: string
  name: string
  picture: string
  url: string
  friends?: Array<Partial<ProfileType>>
  groups?: Array<Partial<GroupType>>
  feed?: Array<Partial<FeedType>>
}
