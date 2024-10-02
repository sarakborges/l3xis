<style src="./Button.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { ButtonType } from './Button.type'

const { type, disabled } = defineProps<ButtonType>()
</script>

<template>
  <button
    :class="
      [
        'button',
        Boolean(primary) || !Boolean(secondary) ? 'primary' : '',
        Boolean(secondary) && !Boolean(primary) ? 'secondary' : ''
      ].join(' ')
    "
    :type="type || 'button'"
    :form="form"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
