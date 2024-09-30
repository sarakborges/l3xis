import { createRouter, createWebHistory } from 'vue-router'

import ROUTES, { HOME, LOGIN } from '@/Utils/Router/Routes'
import { LOCAL_AUTH_TOKEN_KEY } from '@/Utils/Data/LocalStorageKeys.data'
import { APP_NAME } from '@/Utils/Texts/App.texts'

const router = createRouter({
  history: createWebHistory(),
  routes: ROUTES
})

router.beforeEach(async (to) => {
  const token = localStorage.getItem(LOCAL_AUTH_TOKEN_KEY)

  // If there is at least one param, it shouldn't change page title, as it will be handled on the page script itself
  if (!Boolean(Object.keys(to.params).length)) {
    document.title = `${APP_NAME} - ${String(to.name)}`
  }

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
