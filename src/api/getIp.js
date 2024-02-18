import request from '@/utils/request'

// 获取用户详细信息
export function getIp() {
    return request({
      url: '/getIp',
      method: 'get'
    })
}