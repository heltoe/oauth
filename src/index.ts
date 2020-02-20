import express, { Application } from 'express'
import settings from './settings'

class Server {
  private app: Application
  constructor() {
    this.app = express()
    this.config()
  }
  config() {
    // ours plugins
    this.app.set('PORT', settings.PORT)
  }
  start() {
    this.app.listen(this.app.get('PORT'), () => console.log(`Server started on ${settings.DOMAIN}`))
  }
}

const server = new Server()
server.start()