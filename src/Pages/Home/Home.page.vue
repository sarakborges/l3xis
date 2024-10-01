<style src="./Home.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { onUpdated } from 'vue'

import Topbar from '@/Components/App/Topbar/Topbar.component.vue'
import SidebarUser from '@/Components/App/SidebarUser/SidebarUser.component.vue'
import HomeFeed from '@/Components/App/HomeFeed/HomeFeed.component.vue'
import HomeLists from '@/Components/App/HomeLists/HomeLists.component.vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'
import ProfileStore from '@/Stores/Profile.store'

const { setProfileData } = ProfileStore
const { activeProfileData } = ActiveProfileStore

onUpdated(() => {
  if (!Boolean(activeProfileData.value?.id)) {
    return
  }

  setProfileData(activeProfileData.value)
})
</script>

<template>
  <Topbar />

  <main id="home-page">
    <section class="home-content" v-if="activeProfileData?.id">
      <SidebarUser />
      <HomeFeed />
      <HomeLists />
    </section>
  </main>
</template>
