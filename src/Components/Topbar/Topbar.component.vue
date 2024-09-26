<style src="./Topbar.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { APP_NAME } from '@/Utils/Texts/App.texts'

import Text from '@/Components/Text/Text.component.vue'
import TopbarMenu from '@/Components/TopbarMenu/TopbarMenu.component.vue'
import TopbarUser from '@/Components/TopbarUser/TopbarUser.component.vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { getProfileData } = ActiveProfileStore
await getProfileData('hope')
</script>

<template>
  <header class="topbar">
    <div class="topbar-body">
      <aside class="logo">
        <Text as="p">{{ APP_NAME }}</Text>
      </aside>

      <section class="topbar-right">
        <TopbarMenu />
        <TopbarUser />
      </section>
    </div>
  </header>
</template>
