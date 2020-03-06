import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/loginAndReg/login')
    },
    {
      path: '/reg',
      name: 'Reg',
      component: () => import('@/pages/loginAndReg/reg')
    },
    {
      path: '/userCenter',
      name: 'UserCenter',
      component: () => import('@/pages/userCenter/userCenter'),
      redirect: 'manageUser',
      children: [
        {
          path: '/userCenter/manageUser',
          name: 'ManageUser',
          alias: '/manageUser',
          component: () => import('@/pages/userCenter/manageUser')
        }, {
          path: '/userCenter/myCenter',
          name: 'MyCenter',
          alias: '/myCenter',
          component: () => import('@/pages/userCenter/myCenter')
        }
      ]
    }
  ]
})
