<template>
  <div class="apiPage">
    api页面
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
    this.getApiStatus()
  },
  mounted () {},
  watch: {},
  methods: {
    getApiStatus () {
      this.$get('/admin/apiStatus').then(res => {
        console.log('res', res)
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.apiPage{

}
</style>
