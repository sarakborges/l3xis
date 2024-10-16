import { RouteRecordRaw } from 'vue-router'

import { APP_NAME } from '@/Utils/Texts/App.texts'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

import HomePage from '@/Pages/Home/Home.page.vue'
import LoginPage from '@/Pages/Login/Login.page.vue'
import ProfilePage from '@/Pages/Profile/Profile.page.vue'
import FriendsPage from '@/Pages/Friends/Friends.page.vue'

export const HOME: RouteRecordRaw = {
  path: '/',
  name: ROUTE_NAMES.HOME,
  component: HomePage,

  beforeEnter: () => {
    document.title = `${APP_NAME} - ${ROUTE_NAMES.HOME}`
  }
}

export const LOGIN: RouteRecordRaw = {
  path: '/login',
  name: ROUTE_NAMES.LOGIN,
  component: LoginPage,

  beforeEnter: () => {
    document.title = `${APP_NAME} - ${ROUTE_NAMES.LOGIN}`
  }
}

export const PROFILE: RouteRecordRaw = {
  path: '/profile/:url',
  name: ROUTE_NAMES.PROFILE,
  component: ProfilePage,

  beforeEnter: (to) => {
    document.title = `${APP_NAME} - @${to.params.url}`
  }
}

export const FRIENDS: RouteRecordRaw = {
  path: '/profile/:url/friends/page=:page?',
  name: ROUTE_NAMES.FRIENDS,
  component: FriendsPage,

  beforeEnter: (to) => {
    document.title = `${APP_NAME} - @${to.params.url} - Friends`
  }
}

export default [HOME, LOGIN, PROFILE, FRIENDS]
