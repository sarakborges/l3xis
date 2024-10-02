<script setup lang="ts">
import { GroupsListType } from './GroupsList.type'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import { GroupType } from '@/Utils/Types/Group.type'

import {
  GROUPS_LIST_EMPTY,
  GROUPS_LIST_MORE,
  GROUPS_LIST_TITLE,
  PROFILE_GROUPS_LIST_EMPTY
} from '@/Utils/Texts/App.texts'

import List from '@/Components/App/List/List.component.vue'

const { isHome, groups } = defineProps<GroupsListType>()

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
    :list="mapGroups(groups)"
    :linkTo="ROUTE_NAMES.PROFILE"
    :maxItems="9"
  />
</template>
