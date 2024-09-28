<style src="./TopbarSearch.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { TOPBAR_SEARCH_PLACEHOLDER } from '@/Utils/Texts/App.texts'

import Input from '@/Components/Input/Input.component.vue'
import Button from '@/Components/Button/Button.component.vue'

const doSearch = (e: Event) => {
  e.preventDefault()
}
</script>

<template>
  <section class="topbar-search">
    <form :onSubmit="doSearch">
      <Input name="topbar-search" :placeholder="TOPBAR_SEARCH_PLACEHOLDER" />

      <Button type="submit" secondary>
        <v-icon name="fa-search" />
      </Button>
    </form>
  </section>
</template>
