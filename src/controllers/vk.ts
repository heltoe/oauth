import { Request, Response } from 'express'
import Vk from '../oauth/vk/core'
import { getInfo } from '../oauth/vk/getInfo'

class vk {
  public async getCode(req: Request, res: Response) {
    try {
      res.redirect(Vk.authorization())
    } catch(e) {
      return res.status(404).json({ status: 'Vk error' })
    }
  }
  public async redirectToToken(req: Request, res: Response) {
    try {
      const info = await getInfo(req.query.code)
      return res.status(200).json({ user: info })
    } catch(error) {
      return res.status(404).json({ status: 'Vk error' })
    }
  }
}
const routeVk: vk = new vk()
export default routeVk