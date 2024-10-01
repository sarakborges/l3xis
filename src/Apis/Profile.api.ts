import profileMock from '@/Apis/Mocks/Profile.mock.json'

import { paginatedRequest, simpleRequest } from '@/Apis/Request.api'

import { ProfileType } from '@/Utils/Types/Profile.type'
import {
  RequestResultType,
  PaginatedRequestResultType
} from '@/Utils/Types/Request.type'

const getById = async (id: string): Promise<RequestResultType<ProfileType>> => {
  const profile = await simpleRequest({
    req: profileMock
  })

  const profileData = profile.results.find(
    (mockItem: ProfileType) => mockItem?.id === id
  )

  if (!Boolean(profileData)) {
    return {
      results: undefined
    }
  }

  return {
    results: profileData
  }
}

const getByUrl = async (
  url: string
): Promise<RequestResultType<ProfileType>> => {
  const profile = await simpleRequest({
    req: profileMock
  })

  const profileData = profile.results.find(
    (mockItem: ProfileType) => mockItem?.url === url
  )

  if (!Boolean(profileData)) {
    return {
      results: undefined
    }
  }

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
