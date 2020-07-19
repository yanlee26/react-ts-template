import { GetCaptchaResult } from './type'
import { GEE_TEST_INIT_REGISTER_UTL } from './config'

function api<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export const apiGetCaptchaParams = () =>
  api<GetCaptchaResult>(`${GEE_TEST_INIT_REGISTER_UTL}/register?t=${+new Date()}`)
