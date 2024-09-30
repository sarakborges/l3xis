import { RouteRecordRaw } from 'vue-router'

import HomePage from '@/Pages/Home/Home.page.vue'
import LoginPage from '@/Pages/Login/Login.page.vue'

export const HOME: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: HomePage
}

export const LOGIN: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: LoginPage
}

export const TOPBAR_MENU = [
  {
    ICON: 'fa-home',
    TEXT: `Home`,
    TO: HOME.name
  },

  {
    ICON: 'bi-person-fill',
    TEXT: `My profile`,
    TO: HOME.name
  },

  {
    ICON: 'bi-envelope-fill',
    TEXT: `Messages`,
    TO: HOME.name
  },

  {
    ICON: 'bi-bell-fill',
    TEXT: `Notifications`,
    TO: HOME.name
  },

  {
    ICON: 'co-list-rich',
    TEXT: `Profiles list`,
    TO: HOME.name
  }
]

export default [HOME, LOGIN]
