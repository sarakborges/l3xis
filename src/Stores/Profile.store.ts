import { ref } from 'vue'

import { ProfileType } from '@/Utils/Types/Profile.type'

import ProfileApi from '@/Apis/Profile.api'

let profileData = ref()
let isLoading = ref(false)

const getProfileData = async (id: string) => {
  isLoading.value = true
  const profileReq = await ProfileApi.getById(id)

  profileData.value = profileReq?.results
  isLoading.value = false
}

const setProfileData = (profile: ProfileType) => {
  profileData.value = profile
}

export default {
  isLoading,
  profileData,
  getProfileData,
  setProfileData
}
