<style src="./Input.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { InputType } from './Input.type'

const { type, disabled } = defineProps<InputType>()
</script>

<template>
  <input
    class="input"
    :type="type || 'text'"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>
