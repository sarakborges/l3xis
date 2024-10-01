<style src="./SidebarUser.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { SIDEBAR_EDIT_PROFILE, SIDEBAR_VIEW_PROFILE } from './SidebarUser.texts'
import { SIDEBAR_MENU } from './SidebarUser.data'

import { HOME } from '@/Utils/Router/Routes'

import Text from '@/Components/DesignSystem/Text/Text.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'
import Button from '@/Components/DesignSystem/Button/Button.component.vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'
import ProfileStore from '@/Stores/Profile.store'

const { profileData } = ProfileStore
const { activeProfileData } = ActiveProfileStore
</script>

<template>
  <aside class="home-user">
    <section class="home-user-picture">
      <picture>
        <img :src="activeProfileData.picture" />
      </picture>
    </section>

    <main class="home-user-info">
      <section class="home-user-name">
        <Text as="span">{{ activeProfileData.name }}</Text>
        <Text as="span">@{{ activeProfileData.url }}</Text>
      </section>

      <section
        class="profile-actions"
        v-if="profileData?.id === activeProfileData?.id"
      >
        <Link :name="HOME.name" button>{{ SIDEBAR_VIEW_PROFILE }}</Link>
        <Button secondary>{{ SIDEBAR_EDIT_PROFILE }}</Button>
      </section>

      <nav v-if="profileData?.id !== activeProfileData?.id">
        <ul>
          <li v-for="menu_item in SIDEBAR_MENU">
            <Link :name="menu_item.TO">
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
