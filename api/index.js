import axios from 'axios'
import qs from 'qs'
import config from './config'

if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

const service = axios.create(config)

// POST 传参序列化
service.interceptors.request.use(
  config => {
    if (config.method === 'POST') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    return new Promise.reject(error)
  }
)

// 返回状态判断
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return new Promise.reject(error)
  }
)

export default {
  post (url, data) {
    console.log('post request url', url)
    return service({
      method: 'POST',
      url,
      data: data
    })
  },
  get (url, data) {
    console.log('get request url', url)
    return service({
      method: 'GET',
      url,
      params: data
    })
  },
  delete (url, data) {
    console.log('delete request url', url)
    return service({
      methods: 'DELETE',
      url,
      params: data
    })
  }
}
