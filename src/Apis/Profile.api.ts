import profileMock from '@/Assets/Mocks/Profile.mock.json'
import groupMock from '@/Assets/Mocks/Group.mock.json'
import feedMock from '@/Assets/Mocks/Feed.mock.json'

import { paginatedRequest, simpleRequest } from '@/Apis/Request.api'

import { GroupType } from '@/Utils/Types/Group.type'
import { FeedType } from '@/Utils/Types/Feed.type'
import { ProfileType } from '@/Utils/Types/Profile.type'
import {
  RequestResultType,
  PaginatedRequestResultType
} from '@/Utils/Types/Request.type'

const getMockedInfo = (profile: ProfileType) => {
  const friends: Array<Partial<ProfileType>> | undefined = profile.friends
    ?.map((friendItem: Partial<ProfileType>) => {
      const friendProfile = profileMock.find((profileMockItem: ProfileType) => {
        return friendItem.id === profileMockItem.id
      })

      if (Boolean(friendProfile)) {
        return friendProfile as ProfileType
      }

      return friendProfile as Partial<ProfileType>
    })
    .filter((friendItem) => {
      return Object.keys(friendItem).length > 1
    })

  const groups: Array<Partial<GroupType>> | undefined = profile.groups
    ?.map((groupItem: Partial<GroupType>) => {
      const groupProfile = groupMock.find((groupMockItem: GroupType) => {
        return groupItem.id === groupMockItem.id
      })

      if (Boolean(groupProfile)) {
        return groupProfile as GroupType
      }

      return groupProfile as Partial<GroupType>
    })
    .filter((groupItem) => {
      return Object.keys(groupItem).length > 1
    })

  const feed: Array<FeedType> | undefined = profile.feed
    ?.map((feedItem: Partial<FeedType>) => {
      const feedProfile = feedMock.find((feedMockItem: FeedType) => {
        return feedItem.id === feedMockItem.id
      })

      if (Boolean(feedProfile)) {
        return { ...feedProfile, time: new Date(feedProfile!.time) } as FeedType
      }

      return {
        id: '',
        content: '',
        type: '',
        time: new Date()
      }
    })
    .filter((feedItem) => {
      return Boolean(feedItem?.id)
    })

  return {
    friends: Boolean(friends) ? friends : [],
    groups: Boolean(groups) ? groups : [],
    feed: Boolean(feed) ? feed : []
  }
}

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

  const mockedInfo = getMockedInfo(profileData)

  const newProfileData = {
    ...profileData,
    ...mockedInfo
  }

  return newProfileData
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
