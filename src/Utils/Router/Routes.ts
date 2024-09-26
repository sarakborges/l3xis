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

export default [HOME, LOGIN]
