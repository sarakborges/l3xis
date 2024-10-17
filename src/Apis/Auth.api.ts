import userMock from '@/Assets/Mocks/User.mock.json'

import { simpleRequest } from '@/Apis/Request.api'

import { LOCAL_AUTH_TOKEN_KEY } from '@/Utils/Data/LocalStorageKeys.data'

import { UserType } from '@/Utils/Types/User.type'

const doLogin = async ({ username, password }: Partial<UserType>) => {
  const user = await simpleRequest({
    req: userMock
  })

  const userData = user.results.find(
    (userItem: UserType) =>
      userItem.username === username && userItem.password === password
  )

  if (!Boolean(userData)) {
    return false
  }

  localStorage.setItem(LOCAL_AUTH_TOKEN_KEY, 'oi')
  return true
}

export default {
  doLogin
}
