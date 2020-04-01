import express, { Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import serveStatic from 'serve-static'
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
    this.app.use(express.json())
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(serveStatic('view'))
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