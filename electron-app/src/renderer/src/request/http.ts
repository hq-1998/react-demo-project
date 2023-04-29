import { baseConfig } from './config'
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ERROR_CODES } from './data'

const instance = axios.create(baseConfig)

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.resolve(ERROR_CODES.CANCEL_REQUEST)
    }
    return Promise.reject(error)
  }
)

const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return instance.get(url, config)
}

const post = <T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> => {
  return instance.post(url, data, config)
}

const put = <T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> => {
  return instance.put(url, data, config)
}

const del = <T>(url, config?: AxiosRequestConfig): Promise<T> => {
  return instance.delete(url, config)
}

export { instance, post, get, put, del }
