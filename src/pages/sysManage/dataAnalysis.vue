<template>
  <div class="dataAnalysicPage">
    数据分析页面
    <el-row>
      <el-col :span='12'>
        <div id="sexAnalysis">

        </div>
      </el-col>
      <el-col :span='24'>
        <div id="canvasImg">
          <div class="imgOne"><img src="https://upload-images.jianshu.io/upload_images/20206933-80c04c408b695534.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></div>
          <div class="imgTwo"><img src="https://upload-images.jianshu.io/upload_images/20206933-f97a0bb8ea241063.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""></div>
        </div>
      </el-col>
      <el-col :span='6'><el-button type='warning' @click='downloadPicture'>点击生成图片</el-button></el-col>
      <el-col>
        生成的图片是:
        <img :src="dataURL" alt="" srcset="">
      </el-col>
      <el-col>
        <el-button @click='joinActive'>参加活动</el-button>
        <el-button @click='getActiveData'>表关系一对一获取活动列表及具体数据</el-button>
        <el-button @click='launchActive'>新建活动</el-button>
        <el-button @click='hasJoin'>获取已经参加的活动</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  data () {
    return {
      dataURL: ''
    }
  },
  components: {},
  computed: {},
  created () {},
  mounted () {
    this.getDataAnalysis()
  },
  watch: {},
  methods: {
    getDataAnalysis () {
      this.$get('/admin/dataAnalysis').then(res => {
        console.log('res', res.data)
        if (res.data.sexAnalysis) {
          this.drawSex(res.data.sexAnalysis)
        }
      }).catch(err => {
        console.log('err', err)
      })
    },
    drawSex (sexData) {
      var echarts = require('echarts')
      var myChart = echarts.init(document.getElementById('sexAnalysis'))
      myChart.setOption({
        title: {
          text: '性别比例'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [{
          // name: '性别统计',
          type: 'pie',
          radius: '100%',
          center: ['150%', '30%'],
          data: sexData,
          animation: true,
          avoidLabelOverlap: true,
          label: {
            formatter: ' {b|{b}：}{c} 人 {per|{d}%}  ',
            backgroundColor: '#eee',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: '#999',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#aaa',
                width: '100%',
                borderWidth: 0.5,
                height: 0
              },
              b: {
                fontSize: 16,
                lineHeight: 33
              },
              per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 4],
                borderRadius: 2
              }
            }
          },
          left: 0,
          right: '66.6667%',
          top: 0,
          bottom: 0
        }]
      })
    },
    downloadPicture () {
      let self = this
      setTimeout(function () {
        html2canvas(document.querySelector('#canvasImg'), {
          useCORS: true
        }).then(canvas => {
          canvas.className = 'canvas'
          let dataURL = canvas.toDataURL('image/png')
          // document.querySelector("#image").attr("src", dataURL);
          self.dataURL = dataURL
          if ('download' in document.createElement('a')) { // 非IE下载
            const elink = document.createElement('a')
            elink.download = 'text'
            elink.style.display = 'none'
            elink.href = self.dataURL
            document.body.appendChild(elink)
            elink.click()
            document.body.removeChild(elink)
          } else { // IE10+下载
            navigator.msSaveBlob(self.dataURL, 'text')
          }
        })
      }, 1000)
    },
    joinActive () {
      console.log('参加活动')
      let params = {
        userName: 'sen',
        activeMsg: '活动宣言',
        activeId: 2
      }
      this.$post('/fe/joinOneActive', params).then(res => {
        console.log('res', res.data)
      }).catch(err => {
        console.log('err', err)
      })
    },
    getActiveData () {
      this.$get('/fe/getActiveList').then(res => {
        console.log('res', res.data)
      }).catch(err => {
        console.log('err', err)
      })
    },
    launchActive () {
      let params = {
        activeName: '活动名称',
        activeCreator: 'sen'
      }
      this.$post('/fe/launchActive', params).then(res => {
        console.log('res', res.data)
      }).catch(err => {
        console.log('err', err)
      })
    },
    hasJoin () {
      let params = {
        userName: 'sen'
      }
      this.$get('/fe/hasJoin', params).then(res => {
        console.log('res', res.data)
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.dataAnalysicPage{
  #sexAnalysis{
    widows: 500px;
    height: 500px;
  }
  #canvasImg{
    width: 300px;
    position: relative;
    .imgOne{
      width: 100%;

      img{
        width: 100%;
      }
    }
    .imgTwo{
      width: 50px;
      height: 50px;
      position: absolute;
      left: 20%;
      top: 20%;
      img{
        width: 50px;
      }
    }
  }
}
</style>
