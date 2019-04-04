import getAxios from './axios'

import Base64 from 'js-base64'

const getBasicAuth = token => {
  token ? Base64.encode(token) : ''
}

export const api = getAxios({
  baseURL: 'http://localhost:8888/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

export const setHttpAuth = token => {
  const TOKEN = getBasicAuth(token)
  api.defaults.headers.common.Authorization = TOKEN
}
