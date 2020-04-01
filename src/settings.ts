import fs from 'fs'
// auto generate pages
const getFiles = (dir: string) => {
  const arrfiles = fs.readdirSync(dir)
  return arrfiles.map(item => `/${item.slice(0, -5)}`)
}

export default {
  PAGES: getFiles('view/pages'),
  PORT: process.env.PORT || 3000,
  DOMAIN: process.env.DOMAIN || 'http://localhost:3000',
  oauth: {
    vk: {
      idApp: '7336513',
      secretKey: 'bJQ1T5Cxemcjd8sUEc1f'
    },
    instagram: {
      idApp: '7336513',
      secretKey: 'bJQ1T5Cxemcjd8sUEc1f'
    }
  }
}