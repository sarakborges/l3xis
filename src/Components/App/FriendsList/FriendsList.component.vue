<script setup lang="ts">
import { FriendsListType } from './FriendsList.type'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import { ProfileType } from '@/Utils/Types/Profile.type'

import {
  FRIENDS_LIST_EMPTY,
  FRIENDS_LIST_MORE,
  FRIENDS_LIST_TITLE,
  PROFILE_FRIENDS_LIST_EMPTY
} from '@/Utils/Texts/App.texts'

import List from '@/Components/App/List/List.component.vue'

const { isHome, friends } = defineProps<FriendsListType>()

const mapFriends = (friends: Array<ProfileType>) => {
  if (!Boolean(friends)) {
    return []
  }

  return friends.map((friendItem: ProfileType) => ({
    title: friendItem.name,
    url: friendItem.url,
    picture: friendItem.picture
  }))
}
</script>

<template>
  <List
    :title="FRIENDS_LIST_TITLE"
    :emptyText="isHome ? FRIENDS_LIST_EMPTY : PROFILE_FRIENDS_LIST_EMPTY"
    :moreText="FRIENDS_LIST_MORE"
    :list="mapFriends(friends)"
    :linkTo="ROUTE_NAMES.PROFILE"
    :maxItems="9"
  />
</template>
