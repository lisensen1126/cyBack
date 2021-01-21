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
        }, {
          path: '/userCenter/adminUserLogs',
          name: 'AdminUserLogs',
          alias: '/logs',
          component: () => import('@/pages/userCenter/adminUserLogs')
        }
      ]
    },
    {
      path: '/sysManage',
      name: 'Api',
      redirect: 'sysLogs',
      component: () => import('@/pages/sysManage/sysManage'),
      children: [
        {
          path: '/sysManage/sysLogs',
          name: 'SysLogs',
          alias: '/sysLogs',
          component: () => import('@/pages/sysManage/sysLogs')
        }, {
          path: '/sysManage/watchApi',
          name: 'WatchApi',
          alias: '/watchApi',
          component: () => import('@/pages/sysManage/watchApi')
        },
        {
          path: '/sysManage/dataAnalysis',
          name: 'DataAnalysis',
          alias: '/dataAnalysis',
          component: () => import('@/pages/sysManage/dataAnalysis')
        }
      ]
    }
  ]
})
