<style src="./Tooltip.style.scss" lang="sass" scoped />

<script setup lang="ts">
import Text from '@/Components/DesignSystem/Text/Text.component.vue'
</script>

<template>
  <div class="tooltip">
    <Text as="span"><slot /></Text>
  </div>
</template>
