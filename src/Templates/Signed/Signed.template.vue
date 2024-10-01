<script setup lang="ts">
import { onMounted } from 'vue'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

const { getActiveProfileData } = ActiveProfileStore

const loadProfileData = async () => {
  await getActiveProfileData()
}

onMounted(async () => {
  await loadProfileData()
})
</script>

<template>
  <slot />
</template>
