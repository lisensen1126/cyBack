import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '@/i18n/i18n'
Vue.use(Vuex)
// let currentEnv = localStorage.currentEnv ? localStorage.currentEnv : false
// console.log('当前本地缓存里是否有currentEnv', currentEnv)
export default new Vuex.Store({

  state: {
    i18nLocal: localStorage.local ? localStorage.local : 'zh',
    user: localStorage.user ? JSON.parse(localStorage.user) : {},
    pageSize: 10
  },
  actions: {
    changeCurrentCity (ctx, indexNews) {
      // console.log('store中的 indexNEWs  -- ', indexNews)
      ctx.commit('changeCurrentCity', indexNews)
    }
  },
  mutations: {
    changei18nLocal (state, lcoal) {
      state.i18nLocal = lcoal
      i18n.locale = lcoal
    },
    setUser (state, user) {
      console.log('用户信息', user)
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    }
  }
})
