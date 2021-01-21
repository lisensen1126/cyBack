<template>
  <div class="headerPage">
    <h2 class='projectTitle center'>{{$t('projectTitle')}}</h2>
    <div class='headerRight'>
      欢迎你:<el-button type="text" size='large' @click='goMyCenter'>{{$store.state.user.userName}}</el-button>
      <el-button type="text" size='large' @click='logout'>退出&nbsp;</el-button>
      <!-- 当前时间: <span style='margin:0 3px;width:200px;text-align:center'>{{nowTime}}</span>
      <switchLocal/> -->
    </div>
  </div>
</template>

<script>
import switchLocal from '@/components/switchLocal'
import {formatDate} from '@/utils/date'
export default {
  data () {
    return {
      nowTime: formatDate(new Date(), 'YYYY-MM-DD hh:mm:ss')
    }
  },
  components: {switchLocal},
  computed: {},
  created () {
    setInterval(() => {
      this.nowTime = formatDate(new Date(), 'YYYY年MM月DD日 hh:mm:ss')
    }, 1000)
  },
  mounted () {
    console.log('用户信息', this.$store.state.user)
  },
  watch: {},
  methods: {
    logout () {
      this.$store.commit('setUser', {})
      this.$store.commit('setToken', '')
      localStorage.removeItem('user')
      localStorage.removeItem('headerToken')
      this.$router.push('/login')
    },
    goMyCenter () {
      this.$router.push('/myCenter')
    }
  }
}
</script>

<style scoped lang="scss">
.headerPage{
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding :0 2vw;
  height:5vh ;
}
.headerRight{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  color: #fff;
  text-align: right;
  justify-content: flex-end;
  line-height: 5vh;
  span{
    color: #FF9966;
  }
}
</style>
