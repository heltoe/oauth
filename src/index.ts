import express, { Application } from 'express'
import settings from './settings'
import router from './router'

class Server {
  private app: Application
  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }
  config() {
    // ours plugins
    this.app.set('PORT', settings.PORT)
  }
  routes() {
    this.app.use(router)
  }
  start() {
    this.app.listen(this.app.get('PORT'), () => console.log(`Server started on ${settings.DOMAIN}`))
  }
}

const server = new Server()
server.start()