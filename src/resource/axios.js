import axios from 'axios'
import Cookies from 'js-cookie'

let getAxios = function (setting, timeOut, retry) {
  let settings = JSON.parse(JSON.stringify(setting))
  let ins = axios.create(settings)
  ins.defaults.timeout = timeOut
  ins.defaults.retry = retry // 请求次数
  ins.defaults.retryDelay = 1000 // 请求间隔
  return ins
}
export default getAxios;
