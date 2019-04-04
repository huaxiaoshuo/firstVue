import axios from 'axios'
import Cookies from 'js-cookie'

let getAxios = function (setting, timeOut, retry) {
  let settings = JSON.parse(JSON.stringify(setting))
  let ins = axios.create(settings)
  ins.defaults.timeout = timeOut
  ins.defaults.retry = retry // 请求次数
  ins.defaults.retryDelay = 1000 // 请求间隔
  setInterceptors(ins)
  return ins
}

function setInterceptors (ins) {
  ins.interceptors.request.use(req => {
      console.time(req.method.toUpperCase() + req.url)
      return req
    },
    error => {
      Promise.reject(error)
    })
  ins.interceptors.response.use(
    res => {
      let {config} = res
      console.timeEnd(config.method.toUpperCase() + config.url)
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
    },
    error => {
      Promise.reject(error)
    }
  )
}
export default getAxios;
