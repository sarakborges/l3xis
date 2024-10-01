<style src="./TopbarUser.style.scss" lang="sass" scoped />

<script setup lang="ts">
import ActiveProfileStore from '@/Stores/ActiveProfile.store'

import Button from '@/Components/DesignSystem/Button/Button.component.vue'

const { activeProfileData } = ActiveProfileStore
</script>

<template>
  <section class="topbar-user" v-if="activeProfileData?.id">
    <Button>
      <picture>
        <img :src="activeProfileData.picture" />
      </picture>
    </Button>
  </section>
</template>
