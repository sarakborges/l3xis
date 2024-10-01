<style src="./TopbarMenu.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { TOPBAR_MENU } from './TopbarMenu.data'

import Link from '@/Components/DesignSystem/Link/Link.component.vue'
</script>

<template>
  <nav class="topbar-menu">
    <ul>
      <li v-for="menu_item in TOPBAR_MENU">
        <Link :name="menu_item.TO" :title="menu_item.TEXT" button>
          <v-icon :name="menu_item.ICON" />
        </Link>
      </li>
    </ul>
  </nav>
</template>
