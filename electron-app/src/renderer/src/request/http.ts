import { baseConfig } from './config'
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ERROR_CODES } from './data'

const instance = axios.create(baseConfig)
const pendingRequests = new Map<string, AbortController>()

const cancelPendingRequests = (url: string) => {
  const controller = pendingRequests.get(url)
  try {
    controller?.abort()
  } catch (error: unknown) {
    console.error((error as { message: string })?.message || '请求已经被处理完成或未关联到请求')
  } finally {
    pendingRequests.delete(url)
  }
}

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    cancelPendingRequests(config.url!)
    const abortController = new AbortController()
    config.signal = abortController.signal
    pendingRequests.set(config.url!, abortController)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    cancelPendingRequests(response.config.url!)
    return response.data
  },
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.resolve(ERROR_CODES.CANCEL_REQUEST)
    }

    const url = error.response?.config.error

    if (url && pendingRequests.has(url)) {
      cancelPendingRequests(url)
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
