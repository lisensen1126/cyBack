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
          'childs': [{
            'entity': {
              'id': '4-1',
              'menuName': '用户管理一层',
              'iconClass': 'el-icon-mouse',
              'router': '/manageUser3'
            },
            'childs': [{
              'entity': {
                'id': '5-1',
                'menuName': '5用户管理而二层',
                'iconClass': 'el-icon-mouse',
                'router': '/manageUser1'
              },
              'childs': [{
                'entity': {
                  'id': '5-1',
                  'menuName': '6用户管理三层',
                  'iconClass': 'el-icon-mouse',
                  'router': '/manageUser2'
                }
              }
              ]
            }
            ]
          },
          {
            'entity': {
              'id': '4233333-2',
              'menuName': '个人中心',
              'iconClass': 'el-icon-mouse',
              'router': '/myCenter33'
            }
          },
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
          }, {
            'entity': {
              'id': '422',
              'menuName': '用户中心22',
              'iconClass': 'el-icon-mouse',
              'router': '/userCenter2222'
            }
          }
          ]
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
