import { Router } from 'express'
import vk from './controllers/vk'
import Vk from './oauth/vk/index'

class Routes {
  public router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }
  private routes() {
    this.router.get('/', vk.getCode)
    this.router.get('/authorization', vk.redirectToToken)
  }
}

const routes = new Routes()
export default routes.router