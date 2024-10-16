<style lang="sass" src="./AllFriends.style.scss" scoped />

<script setup lang="ts">
import { onMounted } from 'vue'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import FriendsPaginationStore from '@/Stores/FriendsPagination.store'
import ProfileStore from '@/Stores/Profile.store'

import Picture from '@/Components/DesignSystem/Picture/Picture.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'
import Text from '@/Components/DesignSystem/Text/Text.component.vue'

const { start, end, updatePaginationData, updateTotalItems } =
  FriendsPaginationStore
const { profileData, isLoading } = ProfileStore

onMounted(() => {
  updateTotalItems(profileData.value.friends?.length)
  updatePaginationData()
})
</script>

<template>
  <ul
    v-if="!isLoading && Number(profileData?.friends?.length) > 0"
    class="friends-list"
  >
    <li v-for="friendItem in profileData.friends.slice(start, end)">
      <Link :name="ROUTE_NAMES.PROFILE" :params="{ url: friendItem.url }">
        <Picture
          :src="friendItem.picture"
          :alt="friendItem.name"
          centered
          roundedEdges
        />

        <section>
          <Text as="h3">{{ friendItem.name }}</Text>
          <Text as="span">Friends since 24/12/2020</Text>
        </section>
      </Link>
    </li>
  </ul>
</template>
