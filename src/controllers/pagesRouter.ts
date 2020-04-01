import { Request, Response } from 'express'
import path from 'path'
import settings from '../settings'


class Pages {
  checkPages(req: Request, res: Response) {
    try {
      let page = req.url
      if (page === '/')
        page = '/start'
      // проверка на 404 not found
      // if (settings.PAGES.indexOf(page) === -1)
      //   return res.sendFile(path.resolve(__dirname + `/../../view/pages/404.html`))
      // выдаем нужную страницу
      res.sendFile(path.resolve(__dirname + `/../../view/pages${page}.html`))
    } catch(e) {
      res.status(404).sendFile(path.resolve(__dirname + `/../../view/pages/404.html`))
    }
  }
}

export const pages = new Pages()