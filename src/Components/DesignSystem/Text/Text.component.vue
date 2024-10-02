<style src="./Text.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { TextType } from './Text.type'

const { as } = defineProps<TextType>()
</script>

<template>
  <p v-if="Boolean(as === 'p' || !as)" class="text-wrapper">
    <slot />
  </p>

  <h1 v-if="Boolean(as === 'h1')" class="text-wrapper">
    <slot />
  </h1>

  <h2 v-if="Boolean(as === 'h2')" class="text-wrapper">
    <slot />
  </h2>

  <h3 v-if="Boolean(as === 'h3')" class="text-wrapper">
    <slot />
  </h3>

  <span v-if="Boolean(as === 'span')" class="text-wrapper">
    <slot />
  </span>
</template>
