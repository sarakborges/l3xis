<style src="./Link.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { LinkComponentType } from './Link.type'

const { name, params } = defineProps<LinkComponentType>()
</script>

<template>
  <RouterLink
    :class="['link', Boolean(button) ? 'button' : ''].join(' ')"
    :to="{ name, params }"
  >
    <slot />
  </RouterLink>
</template>
