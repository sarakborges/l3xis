<style src="./SidebarUser.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { SidebarUserComponentType } from './SidebarUser.type'
import { SIDEBAR_ADD_FRIEND, SIDEBAR_EDIT_PROFILE } from './SidebarUser.texts'
import { SIDEBAR_MENU, SIDEBAR_MENU_HOME } from './SidebarUser.data'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import Text from '@/Components/DesignSystem/Text/Text.component.vue'
import Picture from '@/Components/DesignSystem/Picture/Picture.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'
import Button from '@/Components/DesignSystem/Button/Button.component.vue'

import ProfileStore from '@/Stores/Profile.store'
import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { isHome } = defineProps<SidebarUserComponentType>()

const { profileData } = ProfileStore
const { activeProfileData } = ActiveProfileStore

const profileInfo = isHome ? activeProfileData : profileData
</script>

<template>
  <aside class="sidebar-user" v-if="Boolean(profileInfo)">
    <section class="sidebar-user-picture">
      <Picture
        :src="profileInfo.picture"
        :alt="profileInfo.name"
        roundedEdges
      />
    </section>

    <main class="sidebar-user-info">
      <section class="sidebar-user-name">
        <Text as="span">{{ profileInfo.name }}</Text>
        <Text as="span">@{{ profileInfo.url }}</Text>
      </section>

      <section class="profile-actions" v-if="isHome">
        <Button secondary>{{ SIDEBAR_EDIT_PROFILE }}</Button>
      </section>

      <section
        class="profile-actions"
        v-if="!isHome && !(activeProfileData.id === profileData.id)"
      >
        <Button secondary>{{ SIDEBAR_ADD_FRIEND }}</Button>
        <Button><v-icon name="md-morehoriz" /></Button>
      </section>

      <nav class="profile-pages" v-if="!isHome">
        <ul>
          <li v-for="menu_item in SIDEBAR_MENU">
            <Link
              :name="menu_item.TO"
              :class="menu_item.TO === ROUTE_NAMES.PROFILE ? 'active' : ''"
              :params="{ url: profileInfo.url }"
            >
              <v-icon :name="menu_item.ICON" />
              <Text as="span">{{ menu_item.TEXT }}</Text>
            </Link>
          </li>
        </ul>
      </nav>

      <nav class="profile-pages" v-if="isHome">
        <ul>
          <li v-for="menu_item in SIDEBAR_MENU_HOME">
            <Link
              :name="menu_item.TO"
              :params="{ url: profileInfo.url }"
              :class="menu_item.TO === ROUTE_NAMES.HOME ? 'active' : ''"
            >
              <v-icon :name="menu_item.ICON" />
              <Text as="span">{{ menu_item.TEXT }}</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  </aside>
</template>
