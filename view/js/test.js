class Vk {
  constructor(client_id, client_secret, redirectUri, display) {
    this.baseUrlAuthorize = 'https://oauth.vk.com/authorize?'
    this.baseUriToken = 'https://oauth.vk.com/access_token?'
    this.baseUriMethods = 'https://api.vk.com/method/'
    this.client_id = client_id
    this.client_secret = client_secret
    this.redirectUri = redirectUri
    this.display = display
    this.code = ''
    this.token = ''
    this.userId = ''
  }
  authorization() {
    return `${this.baseUrlAuthorize}scope=email&client_id=${this.client_id}&display=${this.display}&redirect_uri=${this.redirectUri}/authorization&response_type=code&v=5.103&revoke=1`
  }
  clientAuthorization() {
    return `${this.baseUrlAuthorize}scope=email&client_id=${this.client_id}&display=${this.display}&redirect_uri=${this.redirectUri}/client-vk&response_type=token&v=5.122revoke=1`
  }
  getToken() {
    return `${this.baseUriToken}client_id=${this.client_id}&client_secret=${this.client_secret}&redirect_uri=${this.redirectUri}/authorization&code=${this.code}`
  }
  getUser() {
    return `${this.baseUriMethods}users.get?user_id=${this.userId}&fields=photo_50,photo_100,photo_200_orig,photo_200,photo_400_orig,photo_max,photo_max_orig,city,sex,bdate,country&access_token=${this.token}&v=5.52`
  }
  // 
  setCode(code) {
    this.code = code
  }
  setToken(token) {
    this.token = token
  }
  setUserId(userId) {
    this.userId = userId
  }
}

const redirectUri = 'http://localhost:3000'
const idApp = '7336513'
const secretKey = 'bJQ1T5Cxemcjd8sUEc1f'
const vk = new Vk(idApp, secretKey, redirectUri, 'page')