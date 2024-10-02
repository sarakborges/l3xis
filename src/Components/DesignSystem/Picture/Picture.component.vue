<style src="./Picture.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { PictureType } from './Picture.type'

const { src, alt, rounded, roundedSquare, centered } =
  defineProps<PictureType>()
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
          roundedSquare ? 'roundedSquare' : ''
        ].join(' ')
      "
    />
  </picture>
</template>
