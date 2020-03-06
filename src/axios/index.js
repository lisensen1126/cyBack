import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
// 生成一个 axios 实例
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000 // 请求 超时配置
})
console.log('process.env.BASE_URL', `${process.env.BASE_URL}`)
// 响应时间
// axios.defaults.timeout = 5 * 1000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = process.env.BASE_URL
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + '0cb1f0e9e2fe49b59edff554faf9572f_oat'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求 拦截器
instance.interceptors.request.use(config => {
  // config.headers.Authorization = 'Bearer ' + '0cb1f0e9e2fe49b59edff554faf9572f_oat'
  // if (store.state.isBF) {
  //   config.headers.idType = 'openid'
  //   console.log('BF环境，请求头需加上idType', config.headers.idType)
  // }
  return config
}, error => {
  Promise.reject(error)
})
// 响应 拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做处理
  console.log('全局打印的api接口返回的数据', response.data)
  if (!response.data.flag) {
    Message({type: 'error', message: response.data.msg})
    return false
  } else {
    return response.data
  }
}, error => {
  // 对响应错误做处理
  console.log('错误', error)
  Message({type: 'error', message: error})
  return Promise.reject(error)
})
export default instance
