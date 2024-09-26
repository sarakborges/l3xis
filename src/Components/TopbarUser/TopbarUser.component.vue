<style src="./TopbarUser.style.scss" lang="sass" scoped />

<script setup lang="ts">
import ActiveProfileStore from '@/Stores/ActiveProfile.store'

import Button from '@/Components/Button/Button.component.vue'
import Text from '@/Components/Text/Text.component.vue'

const { profileData } = ActiveProfileStore
</script>

<template>
  <section class="topbar-user" v-if="profileData?.id">
    <Button secondary>
      <Text as="span">{{ profileData.name }}</Text>

      <picture>
        <img :src="profileData.picture" />
      </picture>
    </Button>
  </section>
</template>
