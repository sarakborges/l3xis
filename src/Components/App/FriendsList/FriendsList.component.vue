<script setup lang="ts">
import { FriendsListComponentType } from './FriendsList.type'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import { ProfileType } from '@/Utils/Types/Profile.type'

import ActiveProfileStore from '@/Stores/ActiveProfile.store'
import ProfileStore from '@/Stores/Profile.store'

import {
  FRIENDS_LIST_EMPTY,
  FRIENDS_LIST_MORE,
  FRIENDS_LIST_TITLE,
  PROFILE_FRIENDS_LIST_EMPTY
} from '@/Utils/Texts/App.texts'

import List from '@/Components/App/List/List.component.vue'

const { isHome } = defineProps<FriendsListComponentType>()

const { activeProfileData } = ActiveProfileStore
const { profileData } = ProfileStore

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
    :url="isHome ? activeProfileData?.url : profileData?.url"
    :list="
      mapFriends(isHome ? activeProfileData?.friends : profileData?.friends)
    "
    :linkTo="ROUTE_NAMES.PROFILE"
    :linkToAll="ROUTE_NAMES.FRIENDS"
    :maxItems="9"
  />
</template>
