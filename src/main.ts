import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

import {
  FaHome,
  BiPersonFill,
  CoListRich,
  BiEnvelopeFill,
  BiBellFill,
  FaCog
} from 'oh-vue-icons/icons'

import router from '@/Utils/Router/Router'

import AppTemplate from '@/Templates/App/App.vue'

addIcons(FaHome, BiPersonFill, CoListRich, BiEnvelopeFill, BiBellFill, FaCog)

createApp(AppTemplate).component('v-icon', OhVueIcon).use(router).mount('#app')
