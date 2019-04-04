import { api } from './create-api'


export const getUser = (code) => {
  return api.get('api/getuser', code)
}
