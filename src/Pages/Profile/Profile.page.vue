<style src="./Profile.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'

import ProfileStore from '@/Stores/Profile.store'

import SignedTemplate from '@/Templates/Signed/Signed.template.vue'

import Topbar from '@/Components/App/Topbar/Topbar.component.vue'
import SidebarUser from '@/Components/App/SidebarUser/SidebarUser.component.vue'
import FriendsList from '@/Components/App/FriendsList/FriendsList.component.vue'
import GroupsList from '@/Components/App/GroupsList/GroupsList.component.vue'

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
        <main></main>

        <section class="profile-lists">
          <FriendsList :friends="profileData?.friends" />
          <GroupsList :groups="profileData?.groups" />
        </section>
      </section>
    </main>
  </SignedTemplate>
</template>
