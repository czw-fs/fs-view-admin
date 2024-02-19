import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {

  state: {
    userId: '',
    name: '',
    token: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
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
        login(username, password).then(res => {
          console.log("token: " + res.data.token + "---login success")

          setToken(res.data.token)
          // console.log(res.data.token)
          commit('SET_USERID', res.data.userId)
          commit('SET_NAME', res.data.userName)
          commit('SET_TOKEN', res.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          console.log("logout")
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    // GetInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo().then(res => {
    //       const user = res.user
    //       commit('SET_ID', user.userId)
    //       commit('SET_NAME', user.userName)
    //       resolve(res)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}
export default user