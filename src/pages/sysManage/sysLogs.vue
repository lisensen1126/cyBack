<template>
  <div class="sysLogsPage">
    <h2>系统日志</h2>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {},
  computed: {},
  created () {
    this.getSysLogs()
  },
  mounted () {},
  watch: {},
  methods: {
    getSysLogs () {
    //   this.$get('/admin/apiStatus').then(res => {
    //     console.log('res', res)
    //   }).catch(err => {
    //     console.log('err', err)
    //   })
    }
  }
}
</script>

<style scoped lang="scss">
.apiPage{

}
</style>
