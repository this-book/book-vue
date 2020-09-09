import axios from 'axios'

/**
 * axios 处理并发请求的助手函数
 */
axios.defaults.baseURL = process.env.API_BASE

axios.interceptors.request.use(

  config => {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)


axios.interceptors.response.use(function (response) {

  if (response.data.code === 8000) {
    return Promise.resolve(response.data)
  }else{
    return Promise.reject(response.data)
  }
}, function (error) {
  return Promise.reject(error)
})
// 请求超时时间
axios.defaults.timeout = 60000

export default axios
