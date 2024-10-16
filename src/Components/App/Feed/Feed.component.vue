<style src="./Feed.style.scss" lang="sass" scoped />

<script setup lang="ts">
import { FeedComponentType } from './Feed.type'
import { FEED_PICTURE_UPDATED } from './Feed.texts'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import Text from '@/Components/DesignSystem/Text/Text.component.vue'
import Picture from '@/Components/DesignSystem/Picture/Picture.component.vue'
import Link from '@/Components/DesignSystem/Link/Link.component.vue'
import Button from '@/Components/DesignSystem/Button/Button.component.vue'

const { profile } = defineProps<FeedComponentType>()

const feedTypes = {
  NEW_PICTURE: 'new-picture',
  PUBLISH: 'publish'
}

const formatDate = (date: Date | string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date))
}
</script>

<template>
  <main class="feed">
    <ul class="feed-list">
      <li class="feed-item" v-for="listItem in profile.feed">
        <header>
          <Picture
            :src="profile.picture"
            :alt="profile.name"
            roundedEdges
            centered
          />

          <section>
            <Link :name="ROUTE_NAMES.PROFILE" :params="{ url: profile.id }">
              {{ profile.name }}
            </Link>

            <Text as="span">{{ formatDate(listItem.time!) }}</Text>
          </section>
        </header>

        <section>
          <Text as="h3" v-if="listItem.type === feedTypes.NEW_PICTURE">
            {{ FEED_PICTURE_UPDATED }}
          </Text>
        </section>

        <main>
          <Picture
            :src="listItem.content!"
            :alt="FEED_PICTURE_UPDATED"
            centered
          />

          <Picture
            :src="listItem.content!"
            :alt="FEED_PICTURE_UPDATED"
            roundedEdges
          />
        </main>

        <footer>
          <Button>
            <v-icon name="bi-heart-fill" />
            <Text as="span">{{ listItem.likedBy?.length || '0' }}</Text>
          </Button>

          <Button>
            <v-icon name="fa-comment" />
            <Text as="span">{{ listItem.comments?.length || '0' }}</Text>
          </Button>
        </footer>
      </li>
    </ul>
  </main>
</template>
