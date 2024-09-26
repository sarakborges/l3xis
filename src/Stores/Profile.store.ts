import { ref } from 'vue'

import ProfileApi from '@/Apis/Profile.api'

let profileData = ref()
let isLoading = ref(false)

const getProfileData = async (id: string) => {
  isLoading.value = true
  const profileReq = await ProfileApi.getById(id)

  profileData.value = profileReq?.results
  isLoading.value = false
}

export default {
  isLoading,
  profileData,
  getProfileData
}
