import { Request, Response } from 'express'
import Vk from '../oauth/vk'
import axios from 'axios'

class vk {
  public async getCode(req: Request, res: Response) {
    try {
      res.redirect(Vk.authorizationServer())
    } catch(e) {
      return res.status(404).json({ status: 'Vk error' })
    }
  }
  public async redirectToToken(req: Request, res: Response) {
    try {
      Vk.setCode(req.query.code)
      const response = await axios.get(Vk.getToken()) // [{ access_token: '533bacf01e11f55b536a565b57531ac114461ae8736d6506a3', expires_in: 43200, user_id: 66748 }]
      Vk.setToken(response.data.access_token)
      Vk.setUserId(response.data.user_id)
      const friendsInfo = await axios.get(Vk.getUser()) // [{ id: 25303464, first_name: 'Влад', last_name: 'Жулинский' }]
      console.log(friendsInfo.data)
      return res.status(200).json('ok')
    } catch(error) {
      return res.status(404).json({ status: 'Vk error' })
    }
  }
}
const routeVk: vk = new vk()
export default routeVk