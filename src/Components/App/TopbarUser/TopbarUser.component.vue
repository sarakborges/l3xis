<style src="./TopbarUser.style.scss" lang="sass" scoped />

<script setup lang="ts">
import ActiveProfileStore from '@/Stores/ActiveProfile.store'

import Button from '@/Components/DesignSystem/Button/Button.component.vue'
import Text from '@/Components/DesignSystem/Text/Text.component.vue'

const { profileData } = ActiveProfileStore
</script>

<template>
  <section class="topbar-user" v-if="profileData?.id">
    <Button>
      <Text as="span">{{ profileData.name }}</Text>

      <picture>
        <img :src="profileData.picture" />
      </picture>
    </Button>
  </section>
</template>
