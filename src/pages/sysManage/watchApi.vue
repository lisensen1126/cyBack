<template>
  <div class="apiPage">
    <h2>api接口监测页面</h2>
    <el-row>
      <el-select v-model="selecteedVal" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-row>
    <el-row>
      <div id="main"></div>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: 'hour',
        label: '按小时监测'
      }, {
        value: 'day',
        label: '按天监测'
      }, {
        value: 'month',
        label: '按月监测'
      }],
      selecteedVal: 'hour',
      timer: null
    }
  },
  components: {},
  computed: {},
  created () {
    this.getApiStatus()
  },
  mounted () {
    this.timer = setInterval(() => {
      this.getApiStatus()
    }, 1000 * 60 * 60)
  },
  watch: {},
  methods: {
    getApiStatus () {
      this.$get('/admin/apiStatus', {type: this.selecteedVal}).then(res => {
        console.log('res', res)
        if (!res.flag) {
          clearInterval(this.timer)
          this.this.timer = null
        }
        let xData = []
        let yData = []
        for (let i in res.data) {
          console.log('ii', i)
          xData.push(i)
          yData.push(res.data[i].length)
        }
        console.log('xData', xData)
        console.log('yData', yData)
        this.drawLine(xData, yData)
      }).catch(err => {
        clearInterval(this.timer)
        this.timer = null
        console.log('err', err)
      })
    },
    drawLine (xData, yData) {
      console.log('xData', xData)
      console.log('yData', yData)
      var echarts = require('echarts')
      var myChart = echarts.init(document.getElementById('main'))
      myChart.setOption({
        title: {
          text: '接口监测'
        },

        tooltip: {},
        xAxis: {
          // data:["2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020"]
          data: [...xData],
          axisLabel: {
            interval: 0,
            rotate: 40
          },
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '接口请求次数',
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: 'green',
            width: 3
          },
          data: yData
        }]
      })
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style scoped lang="scss">
.apiPage{
  #main{
    width: 800px;
    height: 400px;
  }
}
</style>
