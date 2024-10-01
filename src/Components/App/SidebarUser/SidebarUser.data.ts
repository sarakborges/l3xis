import { ROUTE_NAMES } from '@/Utils/Data/RouteNames.data'

export const SIDEBAR_MENU = [
  {
    ICON: 'bi-person-fill',
    TEXT: `About`,
    TO: ROUTE_NAMES.PROFILE
  },

  {
    ICON: 'bi-envelope-fill',
    TEXT: `Send message`,
    TO: ROUTE_NAMES.HOME
  },

  {
    ICON: 'co-list-rich',
    TEXT: `Feed`,
    TO: ROUTE_NAMES.HOME
  },

  {
    ICON: 'bi-camera-fill',
    TEXT: `Photos`,
    TO: ROUTE_NAMES.HOME
  }
]
