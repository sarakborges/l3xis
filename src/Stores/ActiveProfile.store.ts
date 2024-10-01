import { ref } from 'vue'

import userMock from '@/Apis/Mocks/User.mock.json'

import { LOCAL_ACTIVE_PROFILE_KEY } from '@/Utils/Data/LocalStorageKeys.data'

import ProfileApi from '@/Apis/Profile.api'

let activeProfileData = ref()
let isLoading = ref(false)

const getActiveProfileData = async () => {
  isLoading.value = true

  let profileId = localStorage.getItem(LOCAL_ACTIVE_PROFILE_KEY)

  if (!Boolean(profileId)) {
    profileId = userMock.find((userItem) => userItem.id === '1')!.profiles[0]
  }

  const profileReq = await ProfileApi.getById(String(profileId))

  activeProfileData.value = profileReq?.results
  isLoading.value = false
}

export default {
  isLoading,
  activeProfileData,
  getActiveProfileData
}
