import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

export const TOPBAR_MENU = [
  {
    ICON: 'fa-home',
    TEXT: `Home`,
    TO: ROUTE_NAMES.HOME
  },

  {
    ICON: 'bi-person-fill',
    TEXT: `My profile`,
    TO: ROUTE_NAMES.PROFILE
  },

  {
    ICON: 'bi-envelope-fill',
    TEXT: `Messages`,
    TO: ROUTE_NAMES.HOME
  },

  {
    ICON: 'bi-bell-fill',
    TEXT: `Notifications`,
    TO: ROUTE_NAMES.HOME
  }
]
