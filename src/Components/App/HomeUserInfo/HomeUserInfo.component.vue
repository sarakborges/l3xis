<style src="./HomeUserInfo.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { HOME_EDIT_PROFILE } from '@/Utils/Texts/App.texts'

import Text from '@/Components/DesignSystem/Text/Text.component.vue'
import Button from '@/Components/DesignSystem/Button/Button.component.vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { profileData } = ActiveProfileStore
</script>

<template>
  <aside class="home-user-info">
    <section class="home-user-picture">
      <picture>
        <img :src="profileData.picture" />
      </picture>
    </section>

    <section class="home-user-name">
      <Text as="span">{{ profileData.name }}</Text>
      <Text as="span">@{{ profileData.url }}</Text>
    </section>

    <section class="edit-profile">
      <Button secondary>{{ HOME_EDIT_PROFILE }}</Button>
    </section>
  </aside>

  <main class="home-feed"></main>

  <aside class="home-lists"></aside>
</template>
