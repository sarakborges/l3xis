import { ProfileType } from '@/Utils/Types/Profile.type'

export type UserType = {
  id: string
  username: string
  password: string
  profiles: ProfileType[]
}
