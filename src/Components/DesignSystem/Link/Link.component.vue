<style src="./Link.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { RouteRecordNameGeneric } from 'vue-router'

const { name, params } = defineProps<{
  name: RouteRecordNameGeneric
  params?: any
}>()
</script>

<template>
  <RouterLink class="link" :to="{ name, params }"><slot></slot></RouterLink>
</template>
