import { createRouter, createWebHistory } from 'vue-router'

import ROUTES, { HOME, LOGIN } from '@/Utils/Router/Routes'
import { LOCAL_AUTH_TOKEN_KEY } from '@/Utils/Data/LocalStorageKeys.data'

const router = createRouter({
  history: createWebHistory(),
  routes: ROUTES
})

router.beforeEach(async (to) => {
  const token = localStorage.getItem(LOCAL_AUTH_TOKEN_KEY)

  // If has auth token and is going to login, redirects to home
  if (Boolean(token) && to.name === LOGIN.name) {
    return {
      name: HOME.name
    }
  }

  // If has not auth token and is going to any other page, redirects to login
  if (!Boolean(token) && to.name !== LOGIN.name) {
    return {
      name: LOGIN.name
    }
  }
})

export default router
