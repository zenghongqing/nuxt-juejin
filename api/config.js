import http from 'http'
import https from 'https'

export default {
  // 自定义的请求头
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    'X-Requested-With': 'XMLHttpRequest'
  },
  // 超时设置
  timeout: 10000,
  // 跨域不带Token
  withCredentials: true,
  // 响应的数据格式
  responseType: 'json',
  // XSRF设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  // 用于nodejs
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new http.Agent({
    keepAlive: true
  })
}
