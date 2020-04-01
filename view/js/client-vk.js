const btn = document.getElementById('vk')
clickHanler = () => {
  window.location.assign(vk.clientAuthorization())
}
init = async () => {
  try {
    if (window.location.hash.length) {
      const strHash = window.location.hash.slice(1)
      const arrHash = strHash.split('&')
      //
      const indexSliceToken = arrHash[0].indexOf('=')
      const token = arrHash[0].slice(indexSliceToken + 1)
      //
      const indexSliceUserId = arrHash[2].indexOf('=')
      const userId = arrHash[2].slice(indexSliceUserId + 1)
      vk.setToken(token)
      vk.setUserId(userId)
      // const response = await fetch(vk.getUser(), {
      //   method: 'GET' , 
      //   headers: {'Content-Type': 'application/json'}
      // })
      // console.log(response)
      window.location.assign(vk.getUser())
    }
  } catch(error) {
    console.log(error)
  }
}
btn.addEventListener('click', clickHanler)
document.addEventListener("DOMContentLoaded", init)