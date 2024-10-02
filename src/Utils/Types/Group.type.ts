import { ProfileType } from '@/Utils/Types/Profile.type'

export type GroupType = {
  id: string
  name: string
  picture: string
  url: string
  members: Array<Partial<ProfileType>>
}
