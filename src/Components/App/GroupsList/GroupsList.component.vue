<script setup lang="ts">
import { GroupsListComponentType } from './GroupsList.type'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import { GroupType } from '@/Utils/Types/Group.type'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'
import ProfileStore from '@/Stores/Profile.store'

import {
  GROUPS_LIST_EMPTY,
  GROUPS_LIST_MORE,
  GROUPS_LIST_TITLE,
  PROFILE_GROUPS_LIST_EMPTY
} from '@/Utils/Texts/App.texts'

import List from '@/Components/App/List/List.component.vue'

const { isHome } = defineProps<GroupsListComponentType>()

const { activeProfileData } = ActiveProfileStore
const { profileData } = ProfileStore

const mapGroups = (groups: Array<GroupType>) => {
  if (!Boolean(groups)) {
    return []
  }

  return groups.map((groupItem: GroupType) => ({
    title: groupItem.name,
    url: groupItem.url,
    picture: groupItem.picture
  }))
}
</script>

<template>
  <List
    :title="GROUPS_LIST_TITLE"
    :emptyText="isHome ? GROUPS_LIST_EMPTY : PROFILE_GROUPS_LIST_EMPTY"
    :moreText="GROUPS_LIST_MORE"
    :list="mapGroups(isHome ? activeProfileData?.groups : profileData?.groups)"
    :linkTo="ROUTE_NAMES.PROFILE"
    :maxItems="9"
  />
</template>
