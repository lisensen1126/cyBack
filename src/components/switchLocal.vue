<template>
    <div class="switchLocal">
      <el-radio-group v-model="switchLocal">
        <el-radio-button label="zh">{{$t('languageZH')}}</el-radio-button>
        <el-radio-button label="en">{{$t('languageEN')}}</el-radio-button>
      </el-radio-group>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {},
  computed: {
    switchLocal: {
      get () {
        return this.$store.state.i18nLocal
      },
      set (val) {
        localStorage.setItem('local', val)
        this.$store.commit('changei18nLocal', val)
      }
    }
  },
  created () {},
  mounted () {},
  watch: {},
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
