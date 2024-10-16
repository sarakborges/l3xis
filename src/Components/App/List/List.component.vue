<style src="./List.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { ListComponentType } from './List.type'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'

import Tooltip from '@/Components/DesignSystem/Tooltip/Tooltip.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'
import Picture from '@/Components/DesignSystem/Picture/Picture.component.vue'
import Text from '@/Components/DesignSystem/Text/Text.component.vue'

const {
  title,
  emptyText,
  moreText,
  list,
  maxItems = 9,
  linkTo
} = defineProps<ListComponentType>()
const { activeProfileData } = ActiveProfileStore
</script>

<template>
  <aside class="list">
    <Text as="h3">{{ title }} ({{ list?.length }})</Text>

    <ul v-if="Boolean(list?.length)">
      <li v-for="listItem in list.slice(0, maxItems)">
        <Link :name="linkTo" :params="{ url: listItem.url }">
          <Picture
            :src="listItem.picture"
            :alt="listItem.title"
            centered
            roundedEdges
          />
        </Link>

        <Tooltip>{{ listItem.title }}</Tooltip>
      </li>
    </ul>

    <section class="bottom-text">
      <Link
        v-if="Boolean(list?.length)"
        as="span"
        :name="linkTo"
        :params="{ url: activeProfileData.url }"
        >{{ moreText }}</Link
      >
      <Text as="span" v-if="!Boolean(list?.length)">{{ emptyText }}</Text>
    </section>
  </aside>
</template>
