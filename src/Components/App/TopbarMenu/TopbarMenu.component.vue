<style src="./TopbarMenu.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { TOPBAR_MENU } from './TopbarMenu.data'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

import Tooltip from '@/Components/DesignSystem/Tooltip/Tooltip.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'

const { activeProfileData } = ActiveProfileStore
</script>

<template>
  <nav class="topbar-menu" v-if="activeProfileData?.id">
    <ul>
      <li v-for="menu_item in TOPBAR_MENU">
        <Link
          :name="menu_item.TO"
          :title="menu_item.TEXT"
          :params="
            menu_item.TO === ROUTE_NAMES.PROFILE
              ? { url: activeProfileData?.url }
              : undefined
          "
          button
        >
          <v-icon :name="menu_item.ICON" />
        </Link>

        <Tooltip>{{ menu_item.TEXT }}</Tooltip>
      </li>
    </ul>
  </nav>
</template>
