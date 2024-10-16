<style src="./Friends.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import ProfileStore from '@/Stores/Profile.store'
import FriendsPaginationStore from '@/Stores/FriendsPagination.store'

import SignedTemplate from '@/Templates/Signed/Signed.template.vue'

import PaginatedList from '@/Components/DesignSystem/PaginatedList/PaginatedList.component.vue'
import Text from '@/Components/DesignSystem/Text/Text.component.vue'

import Topbar from '@/Components/App/Topbar/Topbar.component.vue'
import SidebarUser from '@/Components/App/SidebarUser/SidebarUser.component.vue'
import AllFriends from '@/Components/App/AllFriends/AllFriends.component.vue'

const route = useRoute()

const { isLoading, profileData, getProfileData } = ProfileStore
const {
  currentPage,
  totalPages,
  start,
  end,
  totalItems,
  pagination,
  getCurrentPage,
  updatePaginationData,
  createPagination
} = FriendsPaginationStore

const { url } = route.params

const loadProfileData = async () => {
  await getProfileData(String(url))
}

onMounted(async () => {
  await loadProfileData()
})

onUpdated(async () => {
  await loadProfileData()
})
</script>

<template>
  <SignedTemplate>
    <Topbar />

    <main id="friends-page">
      <section class="friends-content" v-if="profileData?.id">
        <SidebarUser isHome />

        <main
          class="friends-list-wrapper"
          v-if="!isLoading && Number(profileData?.friends?.length > 0)"
        >
          <Text as="h1">@{{ profileData.url }}'s friends</Text>

          <PaginatedList
            :linkTo="ROUTE_NAMES.FRIENDS"
            :linkParams="{ url: profileData.url }"
            :currentPage="currentPage"
            :totalPages="totalPages"
            :start="start"
            :end="end"
            :totalItems="totalItems"
            :pagination="pagination"
            :updatePaginationData="updatePaginationData"
            :getCurrentPage="getCurrentPage"
            :createPagination="createPagination"
          >
            <AllFriends />
          </PaginatedList>
        </main>
      </section>
    </main>
  </SignedTemplate>
</template>
