<style src="./TopbarUser.style.scss" lang="sass" scoped />

<script setup lang="ts">
import ActiveProfileStore from '@/Stores/ActiveProfile.store'

import Picture from '@/Components/DesignSystem/Picture/Picture.component.vue'
import Button from '@/Components/DesignSystem/Button/Button.component.vue'

const { activeProfileData } = ActiveProfileStore
</script>

<template>
  <section class="topbar-user" v-if="activeProfileData?.id">
    <Button>
      <Picture
        :src="activeProfileData.picture"
        :alt="activeProfileData.name"
        rounded
        centered
      />
    </Button>
  </section>
</template>
