<style src="./Topbar.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { APP_NAME } from '@/Utils/Texts/App.texts'

import Text from '@/Components/DesignSystem/Text/Text.component.vue'

import TopbarMenu from '@/Components/App/TopbarMenu/TopbarMenu.component.vue'
import TopbarSearch from '@/Components/App/TopbarSearch/TopbarSearch.component.vue'
import TopbarUser from '@/Components/App/TopbarUser/TopbarUser.component.vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { getActiveProfileData } = ActiveProfileStore
await getActiveProfileData('hope')
</script>

<template>
  <header class="topbar">
    <div class="topbar-body">
      <aside class="topbar-left">
        <Text as="p">{{ APP_NAME }}</Text>
        <TopbarSearch />
      </aside>

      <section class="topbar-right">
        <TopbarMenu />
        <TopbarUser />
      </section>
    </div>
  </header>
</template>
