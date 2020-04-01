import Vk from './core'
import axios from 'axios'

type UserInfo = {
  id: number
  first_name: string
  last_name: string
  sex: number
  bdate: string
  photo_50: string
  photo_100: string
  photo_200: string
  photo_200_orig: string
  photo_max: string
  photo_400_orig: string
  photo_max_orig: string
}

export const getInfo = async (code: string): Promise<UserInfo> => {
  Vk.setCode(code)
  const response = await axios.get(Vk.getToken())
  Vk.setToken(response.data.access_token)
  Vk.setUserId(response.data.user_id)
  const { data } = await axios.get(Vk.getUser())
  return data
}
