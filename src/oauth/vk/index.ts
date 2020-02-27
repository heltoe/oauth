import settings from '../../settings'

class Vk {
  private client_id: string
  private client_secret: string
  private baseUrlAuthorize: string
  private baseUriToken: string
  private baseUriMethods: string
  private redirectUri: string
  private display: string
  private token: string
  private code: string
  private userId: string
  constructor(client_id: string, client_secret: string, redirectUri: string, display: string) {
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
  public authorizationServer(): string {
    return `${this.baseUrlAuthorize}scope=email,friends&client_id=${this.client_id}&display=${this.display}&redirect_uri=${this.redirectUri}/authorization&response_type=code&v=5.103&revoke=1`
  }
  public authorizationClient(): string {
    return `${this.baseUrlAuthorize}client_id=${this.client_id}&display=${this.display}&redirect_uri=${this.redirectUri}/authorization&response_type=token&v=5.103`
  }
  public getToken(): string {
    return `${this.baseUriToken}client_id=${this.client_id}&client_secret=${this.client_secret}&redirect_uri=${this.redirectUri}/authorization&code=${this.code}`
  }
  public getAccountInfo(): string {
    return `${this.baseUriMethods}account.getProfileInfo?access_token=${this.token}&v=5.103`
  }
  public getUser(): string {
    return `${this.baseUriMethods}users.get?user_id=${this.userId}&fields=photo_50,photo_100,photo_200_orig,photo_200,photo_400_orig,photo_max,photo_max_orig,city,sex,bdate,country&access_token=${this.token}&v=5.52`
  }
  // 
  public setCode(code: string): void {
    this.code = code
  }
  public getCode(): string {
    return this.code
  }
  public setToken(token: string): void {
    this.token = token
  }
  public setUserId(userId: string): void {
    this.userId = userId
  }
}

// const redirectUri: string = 'https://oauth.vk.com/blank.html'
const redirectUri: string = 'http://localhost:3000'
const vk: Vk = new Vk(settings.oauth.vk.idApp, settings.oauth.vk.secretKey, redirectUri, 'page')
export default vk