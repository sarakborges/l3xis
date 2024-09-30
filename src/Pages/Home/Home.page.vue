<style src="./Home.style.scss" lang="sass" scoped />

<script setup lang="ts">
import Topbar from '@/Components/App/Topbar/Topbar.component.vue'
import HomeUserInfo from '@/Components/App/HomeUserInfo/HomeUserInfo.component.vue'
import HomeFeed from '@/Components/App/HomeFeed/HomeFeed.component.vue'
import HomeLists from '@/Components/App/HomeLists/HomeLists.component.vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { profileData } = ActiveProfileStore
</script>

<template>
  <Topbar />

  <main id="home-page">
    <section class="home-content" v-if="profileData?.id">
      <HomeUserInfo />
      <HomeFeed />
      <HomeLists />
    </section>
  </main>
</template>
