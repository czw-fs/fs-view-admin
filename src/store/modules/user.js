import { login, getInfo } from '@/api/login'

const user = {

    state: {
        id: '',
        name: ''
    },

    mutations: {
        SET_ID: (state, id) => {
          state.id = id
        },
        SET_NAME: (state, name) => {
          state.name = name
        }
      },
      actions: {
        // 登录
        Login({ commit }, userInfo) {
          const username = userInfo.username.trim()
          const password = userInfo.password
          return new Promise((resolve, reject) => {
            login(username, password, code, uuid).then(res => {

              resolve()
            }).catch(error => {
              reject(error)
            })
          })
        },
    
        // 获取用户信息
        GetInfo({ commit, state }) {
          return new Promise((resolve, reject) => {
            getInfo().then(res => {
              const user = res.user
              commit('SET_ID', user.userId)
              commit('SET_NAME', user.userName)
              resolve(res)
            }).catch(error => {
              reject(error)
            })
          })
        },

    }
}
export default user