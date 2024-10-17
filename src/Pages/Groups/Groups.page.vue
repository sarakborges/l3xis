<style src="./Groups.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useRoute } from 'vue-router'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import { PROFILE_GROUPS_LIST_EMPTY } from '@/Utils/Texts/App.texts'

import ProfileStore from '@/Stores/Profile.store'
import GroupsPaginationStore from '@/Stores/GroupsPagination.store'

import SignedTemplate from '@/Templates/Signed/Signed.template.vue'

import PaginatedList from '@/Components/DesignSystem/PaginatedList/PaginatedList.component.vue'
import Text from '@/Components/DesignSystem/Text/Text.component.vue'

import Topbar from '@/Components/App/Topbar/Topbar.component.vue'
import SidebarUser from '@/Components/App/SidebarUser/SidebarUser.component.vue'
import AllGroups from '@/Components/App/AllGroups/AllGroups.component.vue'

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
} = GroupsPaginationStore

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

    <main id="groups-page">
      <section class="groups-content" v-if="profileData?.id">
        <SidebarUser />

        <main
          class="groups-list-wrapper"
          v-if="!isLoading && Number(profileData?.groups?.length > 0)"
        >
          <Text as="h1">@{{ profileData.url }}'s groups</Text>

          <PaginatedList
            :linkTo="ROUTE_NAMES.GROUPS"
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
            <AllGroups />
          </PaginatedList>
        </main>

        <Text
          as="p"
          v-if="!isLoading && Number(profileData?.groups?.length < 1)"
        >
          {{ PROFILE_GROUPS_LIST_EMPTY }}
        </Text>
      </section>
    </main>
  </SignedTemplate>
</template>
