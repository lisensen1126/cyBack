<template>
<div style='text-align:left'>
  <el-switch
  mode="vertical"
  active-color="#13ce66"
    inactive-color="#ff4949"
  v-model="isCollapse">
</el-switch>
<el-menu router :collapse='isCollapse' style='border: none !important;' :default-active='$route.path'>
  <menuItem v-for="item in menuList" :key='item.path' :item='item'/>
</el-menu>
</div>

</template>
<script>
import menuItem from '@/components/menu.vue'
export default {
  name: 'Aside',
  data () {
    return {
      isCollapse: false,
      menuList: [
        {
          'entity': {
            'id': '1',
            'menuName': '网站介绍',
            'iconClass': 'el-icon-s-cooperation',
            'router': '/home'
          }
        },
        {
          'entity': {
            'id': '4',
            'menuName': '用户中心',
            'iconClass': 'el-icon-mouse',
            'router': '/userCenter4'
          },
          'childs': [
            {
              'entity': {
                'id': '4233333-2',
                'menuName': '个人中心',
                'iconClass': 'el-icon-mouse',
                'router': '/myCenter'
              }
            },
            {
              'entity': {
                'id': '4',
                'menuName': '用户中心',
                'iconClass': 'el-icon-mouse',
                'router': '/userCenter'
              }
            },
            {
              'entity': {
                'id': '4',
                'menuName': '日志管理',
                'iconClass': 'el-icon-mouse',
                'router': '/logs'
              }
            }
          ]
        },
        {
          'entity': {
            'id': '3',
            'menuName': '接口管理',
            'iconClass': 'el-icon-s-cooperation',
            'router': '/api'
          }
        }
      ],
      childs1Flag: false
    }
  },
  components: {
    menuItem
  },
  mounted () {
    console.log('路由打印', this.$route.path)
  },
  computed: {
  },
  methods: {
    handleClick (e) {
      console.log(e.target)
    },
    handleClick2 (val) {
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
