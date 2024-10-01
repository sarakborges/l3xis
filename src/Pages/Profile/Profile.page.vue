<style src="./Profile.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { useRoute } from 'vue-router'

import SignedTemplate from '@/Templates/Signed/Signed.template.vue'

import Topbar from '@/Components/App/Topbar/Topbar.component.vue'
import SidebarUser from '@/Components/App/SidebarUser/SidebarUser.component.vue'

import ProfileStore from '@/Stores/Profile.store'
import { onMounted, onUpdated } from 'vue'

const route = useRoute()
const { profileData, getProfileData } = ProfileStore

const loadProfileData = async () => {
  await getProfileData(String(route.params.url))
}

onMounted(async () => {
  await loadProfileData()
})

onUpdated(async () => {
  await loadProfileData()
})
</script>

<template>
  <SignedTemplate>
    <Topbar />

    <main id="profile-page">
      <section class="profile-content" v-if="profileData?.id">
        <SidebarUser />
      </section>
    </main>
  </SignedTemplate>
</template>
