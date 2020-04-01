import settings from '../../settings'

class Instagramm {
  private client_id: string
  private redirect_uri: string
  private client_secret: string
  private baseUrlAuthorize: string
  private baseUriToken: string
  private code: string
  private token: string
  constructor(client_id: string, client_secret: string, redirect_uri: string) {
    this.client_id = client_id
    this.redirect_uri = redirect_uri
    this.client_secret = client_secret
    this.baseUrlAuthorize = 'https://api.instagram.com/oauth/authorize/?'
    this.baseUriToken = 'https://api.instagram.com/oauth/access_token/?'
    this.code = ''
    this.token = ''
  }
  public authorization() {
    return `${this.baseUrlAuthorize}?client_id=${this.client_id}&scope=user_profile&redirect_uri=${this.redirect_uri}&response_type=code`
  }
  public getToken() {
    return `${this.baseUriToken}?client_id=${this.client_id}&client_secret=${this.client_secret}&grant_type=authorization_code&redirect_uri=${this.redirect_uri}&code=${this.code}`
  }
  public clientTest() {
    return `${this.baseUrlAuthorize}?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&response_type=token`
  }
  // 
  public setCode(code: string): void {
    this.code = code
  }
  public setToken(token: string): void {
    this.token = token
  }
}

const redirectUri: string = 'http://localhost:3000'
const instagram: Instagramm = new Instagramm(settings.oauth.instagram.idApp, settings.oauth.instagram.secretKey, redirectUri)
export default instagram