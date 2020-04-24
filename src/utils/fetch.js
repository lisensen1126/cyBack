import request from '@/axios/index'
export function get (url, data) {
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
export function post (url, data, type = 'json') {
  // console.log(JSON.stringify(data, {}, 4))
  var contentType
  if (type === 'json') {
    contentType = 'application/json'
  } else if (type === 'form') {
    contentType = 'multipart/form-data'
  } else {
    contentType = 'application/x-www-form-urlencoded;charset=utf-8'
  }
  return request.post(url, data, {
    headers: {
      'Content-Type': contentType
    }
  })
}
export function update (url, data) {
  return request.update(url, data)
}
export function deleteItem (url, data) {
  return request.delete(url, data)
}
export function put (url, data) {
  return request.put(url, data)
}
