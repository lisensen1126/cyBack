<template>
  <div id="app" >
    <comHeader></comHeader>
    <el-row class='mainContent' type='flex'>
      <div  v-if='hidnCommon' style='border: 1px solid #f96 !important;'><comAside ></comAside></div>
      <div :span='20' class='mainRouter'>
        <transition name="fade-transform" mode="out-in">
          <router-view :key='key' />
        </transition>
        </div>
    </el-row>
    <comFooter></comFooter>
  </div>
</template>

<script>
import '@/assets/css/reset.css'
import '@/assets/css/common.scss'
import comHeader from '@/components/header'
import comAside from '@/components/aside'
import comFooter from '@/components/footer'
export default {
  name: 'App',
  components: {comHeader, comFooter, comAside},
  computed: {
    key () {
      return this.$route.path
    }
  },
  created () {
    console.log('aaaaaa', this.$route)
    if (this.$route.name === 'Reg' || this.$route.name === 'Login') {
      this.hidnCommon = false
    } else {
      this.hidnCommon = true
    }
  },
  watch: {
    '$route' (newVal, oldVal) {
      console.log('newVal', newVal)
      if (newVal.name === 'Reg' || newVal.name === 'Login') {
        this.hidnCommon = false
        return
      }
      this.hidnCommon = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  margin:0 auto;
  padding: 0;
  font-size: 16px;
}
.mainContent{
  height: 92vh;

}
.mainRouter{
  /* height: 100%; */
  padding: 2vh 2vw;
  overflow: auto;
  flex:1;
}

</style>
