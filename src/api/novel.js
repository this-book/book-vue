import ajax from './config'



export function theovernovel() {
  return ajax.post(
    '/novel/getOverNovelsLimit',
  )

}

