<style src="./Topbar.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { APP_NAME } from '@/Utils/Texts/App.texts'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import Link from '@/Components/DesignSystem/Link/Link.component.vue'

import TopbarMenu from '@/Components/App/TopbarMenu/TopbarMenu.component.vue'
import TopbarSearch from '@/Components/App/TopbarSearch/TopbarSearch.component.vue'
import TopbarUser from '@/Components/App/TopbarUser/TopbarUser.component.vue'
</script>

<template>
  <header class="topbar">
    <div class="topbar-body">
      <aside class="topbar-left">
        <Link :name="ROUTE_NAMES.HOME" button>{{ APP_NAME }}</Link>
        <TopbarSearch />
      </aside>

      <section class="topbar-right">
        <TopbarMenu />
        <TopbarUser />
      </section>
    </div>
  </header>
</template>
