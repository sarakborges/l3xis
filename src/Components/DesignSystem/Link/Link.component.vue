<style src="./Link.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { RouteRecordNameGeneric } from 'vue-router'

const { name, params } = defineProps<{
  name: RouteRecordNameGeneric
  params?: any
  button?: boolean
}>()
</script>

<template>
  <RouterLink
    :class="['link', Boolean(button) ? 'button' : ''].join(' ')"
    :to="{ name, params }"
    ><slot></slot
  ></RouterLink>
</template>
