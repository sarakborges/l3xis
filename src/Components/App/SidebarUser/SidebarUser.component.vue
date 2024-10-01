<style src="./SidebarUser.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import { SIDEBAR_EDIT_PROFILE, SIDEBAR_VIEW_PROFILE } from './SidebarUser.texts'
import { SIDEBAR_MENU } from './SidebarUser.data'

import Text from '@/Components/DesignSystem/Text/Text.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'
import Button from '@/Components/DesignSystem/Button/Button.component.vue'

import ProfileStore from '@/Stores/Profile.store'
import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { isActiveProfile } = defineProps<{
  isActiveProfile?: boolean
}>()

const { profileData } = ProfileStore
const { activeProfileData } = ActiveProfileStore

const profileInfo = isActiveProfile ? activeProfileData : profileData
</script>

<template>
  <aside class="home-user">
    <section class="home-user-picture">
      <picture>
        <img :src="profileInfo.picture" />
      </picture>
    </section>

    <main class="home-user-info">
      <section class="home-user-name">
        <Text as="span">{{ profileInfo.name }}</Text>
        <Text as="span">@{{ profileInfo.url }}</Text>
      </section>

      <section class="profile-actions" v-if="isActiveProfile">
        <Link
          :name="ROUTE_NAMES.PROFILE"
          :params="{ url: profileInfo.url }"
          button
          >{{ SIDEBAR_VIEW_PROFILE }}</Link
        >
        <Button secondary>{{ SIDEBAR_EDIT_PROFILE }}</Button>
      </section>

      <nav class="profile-pages" v-if="!isActiveProfile">
        <ul>
          <li v-for="menu_item in SIDEBAR_MENU">
            <Link
              :name="menu_item.TO"
              :class="menu_item.TO === ROUTE_NAMES.PROFILE ? 'active' : ''"
            >
              <v-icon :name="menu_item.ICON" />
              <Text as="span">{{ menu_item.TEXT }}</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  </aside>

  <main class="home-feed"></main>

  <aside class="home-lists"></aside>
</template>
