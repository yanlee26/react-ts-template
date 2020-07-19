import axios from 'axios'
import { message as $message } from 'antd'
import { BASE_URLS } from 'config'

axios.defaults.timeout = 6000
axios.defaults.baseURL = BASE_URLS[process.env.REACT_APP_ENV!]
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.request.use(
  config => {
    // TODO:
    // const token = store.state.token;
    //     token && (config.headers.Authorization = token);
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    if (res?.data?.success) {
      // $message.success(res.data.message)
    }
    if (res.status === 200) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    let errorMessage = '系统异常'
    if (error.response?.status) {
      // 业务
      console.log(error.response.status)
      switch (error.response.status) {
        case 401: {
          errorMessage = '未授权'
          break
        }
        case 404: {
          errorMessage = '资源不存在'
          break
        }
        case 500: {
          errorMessage = '服务端异常'
          break
        }
        default:
          break
      }
    }

    error.message && $message.error(errorMessage)
    return {
      success: false,
      message: errorMessage,
      data: null
    }
  }
)

export type Response<T = any, U = any> = {
  success: boolean
  message: string
  code: string
  data: T
  errors: U
}

export type ResponseType<T = any> = Promise<Response<T>>

export const get = <T = any>(url: string, params?: any): ResponseType<T> => {
  return axios.get(url, {
    params
  })
}

export const post = <T = any>(url: string, data?: any): ResponseType<T> => {
  return axios.post(url, data)
}
