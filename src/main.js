// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { globalMethods } from '@/utils/mixin.js'
// import './assets/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/i18n'
import { post, get, update, deleteItem, put } from '@/utils/fetch'
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$update = update
Vue.prototype.$delete = deleteItem
Vue.prototype.$put = put
Vue.use(ElementUI, {size: 'small'})
Vue.config.productionTip = false
Vue.mixin(globalMethods)// 引入全局mixin
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})
