import { RouteRecordRaw } from 'vue-router'

import { ROUTE_NAMES } from '@/Utils/Data/RouteNames'

import HomePage from '@/Pages/Home/Home.page.vue'
import LoginPage from '@/Pages/Login/Login.page.vue'

export const HOME: RouteRecordRaw = {
  path: '/',
  name: ROUTE_NAMES.HOME,
  component: HomePage
}

export const LOGIN: RouteRecordRaw = {
  path: '/login',
  name: ROUTE_NAMES.LOGIN,
  component: LoginPage
}

export default [HOME, LOGIN]
