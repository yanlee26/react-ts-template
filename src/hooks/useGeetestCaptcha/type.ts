// https://docs.geetest.com/sensebot/deploy/client/web#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0
export interface GetCaptchaResult {
  gt: string
  challenge: string
  new_captcha: boolean
  success: boolean
}
