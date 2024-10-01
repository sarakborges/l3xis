<style src="./Home.style.scss" lang="sass" scoped />

<script setup lang="ts">
import SignedTemplate from '@/Templates/Signed/Signed.template.vue'

import Topbar from '@/Components/App/Topbar/Topbar.component.vue'
import SidebarUser from '@/Components/App/SidebarUser/SidebarUser.component.vue'
import HomeFeed from '@/Components/App/HomeFeed/HomeFeed.component.vue'
import HomeLists from '@/Components/App/HomeLists/HomeLists.component.vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { activeProfileData } = ActiveProfileStore
</script>

<template>
  <SignedTemplate>
    <Topbar />

    <main id="home-page">
      <section class="home-content" v-if="activeProfileData?.id">
        <SidebarUser isActiveProfile />
        <HomeFeed />
        <HomeLists />
      </section>
    </main>
  </SignedTemplate>
</template>
