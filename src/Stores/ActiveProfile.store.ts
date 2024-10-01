import { ref } from 'vue'

import ProfileApi from '@/Apis/Profile.api'

let activeProfileData = ref()
let isLoading = ref(false)

const getActiveProfileData = async (id: string) => {
  isLoading.value = true
  const profileReq = await ProfileApi.getById(id)

  activeProfileData.value = profileReq?.results
  isLoading.value = false
}

export default {
  isLoading,
  activeProfileData,
  getActiveProfileData
}
