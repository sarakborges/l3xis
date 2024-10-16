<style src="./Picture.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { PictureComponentType } from './Picture.type'

const { src, alt, rounded, roundedEdges, centered } =
  defineProps<PictureComponentType>()
</script>

<template>
  <picture class="picture">
    <img
      :src="src"
      :alt="alt"
      :class="
        [
          rounded ? 'rounded' : '',
          centered ? 'centered' : '',
          roundedEdges ? 'roundedEdges' : ''
        ].join(' ')
      "
    />
  </picture>
</template>
