<template>
      <el-menu-item slot="title"
                    :index="item.entity.router"
                    :key="item.entity.router"
                    v-if="!item.childs">
        <i :class="item.entity.iconClass"></i>
        <span slot='title'>{{item.entity.menuName}}</span>
      </el-menu-item>

    <el-submenu :index="item.entity.router"
                :key="item.entity.router"
                v-else>
      <template slot="title">
        <i :class="item.entity.iconClass"></i>
        <span slot="title">{{item.entity.menuName}}</span>
      </template>
      <sidebar-item v-for="child in item.childs" :key="child.entity.router" :item="child" />
    </el-submenu>
</template>
<script>
export default {
  name: 'sidebar-item',
  data () {
    return {
      isCollapse: true,

      childs1Flag: false
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted () {
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
