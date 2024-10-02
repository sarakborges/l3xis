import profileMock from '@/Apis/Mocks/Profile.mock.json'
import groupMock from '@/Apis/Mocks/Group.mock.json'

import { paginatedRequest, simpleRequest } from '@/Apis/Request.api'

import { GroupType } from '@/Utils/Types/Group.type'
import { ProfileType } from '@/Utils/Types/Profile.type'
import {
  RequestResultType,
  PaginatedRequestResultType
} from '@/Utils/Types/Request.type'

const getProfileData = async (key: keyof ProfileType, val: string) => {
  const profile = await simpleRequest({
    req: profileMock
  })

  const profileData: ProfileType = profile.results.find(
    (mockItem: ProfileType) => mockItem[key] === val
  )

  if (!Boolean(profileData)) {
    return undefined
  }

  const friends: Array<Partial<ProfileType>> | undefined = profileData.friends
    ?.map((friendItem: Partial<ProfileType>) => {
      const friendProfile = profileMock.find(
        (profileMockItem: Partial<ProfileType>) => {
          return friendItem.id === profileMockItem.id
        }
      )

      if (Boolean(friendProfile)) {
        return friendProfile as ProfileType
      }

      return friendProfile as Partial<ProfileType>
    })
    .filter((friendItem) => {
      return Object.keys(friendItem).length > 1
    })

  const groups: Array<Partial<GroupType>> | undefined = profileData.groups
    ?.map((groupItem: Partial<GroupType>) => {
      const groupProfile = groupMock.find(
        (groupMockItem: Partial<GroupType>) => {
          return groupItem.id === groupMockItem.id
        }
      )

      if (Boolean(groupProfile)) {
        return groupProfile as GroupType
      }

      return groupProfile as Partial<GroupType>
    })
    .filter((groupItem) => {
      return Object.keys(groupItem).length > 1
    })

  return {
    ...profileData,
    friends: Boolean(friends) ? friends : [],
    groups: Boolean(groups) ? groups : []
  }
}

const getById = async (id: string): Promise<RequestResultType<ProfileType>> => {
  const profileData = await getProfileData('id', id)

  return {
    results: profileData
  }
}

const getByUrl = async (
  url: string
): Promise<RequestResultType<ProfileType>> => {
  const profileData = await getProfileData('url', url)

  return {
    results: profileData
  }
}

const getAll = async (
  page?: number
): Promise<PaginatedRequestResultType<ProfileType[]>> => {
  const profiles = await paginatedRequest({
    req: profileMock,
    currentPage: page || 1
  })

  return {
    ...profiles
  }
}

export default {
  getById,
  getAll,
  getByUrl
}
