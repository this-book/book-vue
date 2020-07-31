import ajax from './config'


export function test(UserName,PassWord) {
  alert(JSON.stringify({UserName:UserName,PassWord:PassWord}))
  return ajax.post(
    '/hello',
    JSON.stringify({UserName:UserName,PassWord:PassWord})
  )
}
