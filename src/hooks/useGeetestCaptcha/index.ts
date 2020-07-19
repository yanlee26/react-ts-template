import { useEffect, useState, useCallback } from 'react'
import './gt'
import { apiGetCaptchaParams } from './api'
import { GetCaptchaResult } from './type'
import { INIT_GEETEST_OPTIONS } from './config'

export const useGeetestCaptcha = (id: string) => {
  //captchaObj: https://docs.geetest.com/sensebot/apirefer/api/web#appendTo-position
  const [captchaObj, setCaptchaObj] = useState<any>(null)
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(false)

  async function getCaptchaObjResult() {
    return await captchaObj.getValidate()
  }

  const memoizedCallback = useCallback(
    captchaObj => {
      setCaptchaObj(captchaObj)
      captchaObj.appendTo(id)
      captchaObj.onReady(() => setloading(false))
    },
    [id]
  )

  useEffect(() => {
    async function fetch() {
      try {
        const { gt, challenge, new_captcha, success }: GetCaptchaResult = await apiGetCaptchaParams()
        initGeetest(
          {
            gt,
            challenge,
            new_captcha,
            offline: !success,
            ...INIT_GEETEST_OPTIONS
          },
          memoizedCallback
        )
        setError(false)
      } catch (e) {
        console.log(e)
        setError(true)
      }
    }

    fetch()
  }, [memoizedCallback])

  return { captchaObj, error, loading, getCaptchaObjResult }
}
