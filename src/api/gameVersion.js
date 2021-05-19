import request from '@/utils/request'

export function getList (query) {
  return request({
    url: 'game/version/list',
    method: 'get',
    params: query,
  })
}
