<style lang="sass" src="./AllGroups.style.scss" scoped />

<script setup lang="ts">
import { onMounted } from 'vue'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import GroupsPaginationStore from '@/Stores/GroupsPagination.store'
import ProfileStore from '@/Stores/Profile.store'

import Picture from '@/Components/DesignSystem/Picture/Picture.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'
import Text from '@/Components/DesignSystem/Text/Text.component.vue'

const { start, end, updatePaginationData, updateTotalItems } =
  GroupsPaginationStore
const { profileData, isLoading } = ProfileStore

onMounted(() => {
  updateTotalItems(profileData.value.groups?.length)
  updatePaginationData()
})
</script>

<template>
  <ul
    v-if="!isLoading && Number(profileData?.groups?.length) > 0"
    class="groups-list"
  >
    <li v-for="groupItem in profileData.groups.slice(start, end)">
      <Link :name="ROUTE_NAMES.PROFILE" :params="{ url: groupItem.url }">
        <Picture
          :src="groupItem.picture"
          :alt="groupItem.name"
          centered
          roundedEdges
        />

        <section>
          <Text as="h3">{{ groupItem.name }}</Text>
          <Text as="span">Member since 24/12/2020</Text>
        </section>
      </Link>
    </li>
  </ul>
</template>
