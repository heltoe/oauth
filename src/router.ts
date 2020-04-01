import { Router } from 'express'
import vk from './controllers/vk'
import { pages } from './controllers/pagesRouter'
import Vk from './oauth/vk/core'

class Routes {
  public router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }
  private routes() {
    // 
    this.router.get('/server-vk', vk.getCode)
    this.router.get('/authorization', vk.redirectToToken)
    // pages
    this.router.get('*', pages.checkPages)
  }
}

const routes = new Routes()
export default routes.router