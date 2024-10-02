<style src="./Home.style.scss" lang="sass" scoped />

<script setup lang="ts">
import ActiveProfileStore from '@/Stores/ActiveProfile.store'

import SignedTemplate from '@/Templates/Signed/Signed.template.vue'

import Topbar from '@/Components/App/Topbar/Topbar.component.vue'
import SidebarUser from '@/Components/App/SidebarUser/SidebarUser.component.vue'
import Feed from '@/Components/App/Feed/Feed.component.vue'
import FriendsList from '@/Components/App/FriendsList/FriendsList.component.vue'
import GroupsList from '@/Components/App/GroupsList/GroupsList.component.vue'

const { activeProfileData } = ActiveProfileStore
</script>

<template>
  <SignedTemplate>
    <Topbar />

    <main id="home-page">
      <section class="home-content" v-if="activeProfileData?.id">
        <SidebarUser isHome />
        <Feed />

        <section class="home-lists">
          <FriendsList isHome :friends="activeProfileData?.friends" />
          <GroupsList isHome :groups="activeProfileData?.groups" />
        </section>
      </section>
    </main>
  </SignedTemplate>
</template>
