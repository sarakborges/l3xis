<script setup lang="ts">
import { onMounted } from 'vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { getActiveProfileData } = ActiveProfileStore

onMounted(async () => {
  await getActiveProfileData()
})
</script>

<template>
  <slot />
</template>
