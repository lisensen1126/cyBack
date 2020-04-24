<template>
  <div class="mycenterpage">
    <el-row class='userInfo'>
      <el-col :span='12'>
        <span>用户名:</span>
        <span>{{myInfo.userName}}</span>
      </el-col>
      <el-col :span='12'>
        <span>姓名:</span>
        <span>{{myInfo.name}}</span>
      </el-col>
      <el-col :span='12'>
        <span>性别:</span>
        <span>{{myInfo.sex |formatSex}}</span>
      </el-col>
      <el-col :span='12'>
        <span>电话:</span>
        <span>{{myInfo.telPhone}}</span>
      </el-col>
      <el-col :span='12'>
        <span>邮箱:</span>
        <span>{{myInfo.email}}</span>
      </el-col>
      <el-col :span='12'>
        <span>创建时间:</span>
        <span>{{myInfo.createTime}}</span>
      </el-col>
    </el-row>
    <div class='userHeadImg'>
      <div class="headImgBox">
        <!-- <span>头像:</span> -->
        <el-upload
        v-if='!myInfo.avatar'
        class="avatar-uploader"
        ref='uploadAvatar'
        :action="''"
        :multiple="false"
        :show-file-list="false"
        :on-change='changeAvatar'
        :auto-upload="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>

      </el-upload>
      <el-button style="margin-top: 10px;" size="small" v-if='!myInfo.avatar' type="success" @click="uploadHeadImg" :disabled='!allowUploadAvatar'>上传并保存</el-button>

      <img :src="myInfo.avatar" alt="" v-if='myInfo.avatar' class="avatar">
      <el-upload
        v-if='myInfo.avatar&&myInfo.avatar!=""'
        :action="''"
        :multiple="false"
        :show-file-list="false"
        :on-change='changeAvatar'
        :auto-upload="false">
        <el-button style="margin-top: 10px;" size="small" v-if='myInfo.avatar' type="success" @click="updateHeadImg">更新头像</el-button>
      </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: '',
      allowUploadAvatar: false,
      myInfo: {}
    }
  },
  components: {},
  computed: {},
  created () {
    this.getMyInfo()
  },
  mounted () {
    console.log('mycenter页面', this.$store.state.user)
  },
  watch: {},
  methods: {
    getMyInfo () {
      if (!this.$store.state.user.id) {
        this.$message.error('请先登录!')
        return
      }
      this.$get(`/admin/getMyInfo/${this.$store.state.user.id}`).then(res => {
        if (res.flag) {
          // console.log('获取到的我的信息', res.data)
          this.myInfo = res.data
          this.$store.commit('setUser', res.data)
        }
      }).catch(err => {
        console.log('err', err)
      })
    },
    changeAvatar (file) {
      console.log('fffffffff', file)
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log('666——————————————', this.imageUrl)
      // const isJPG = file.raw.type === 'image/jpeg'
      const isLt2M = file.raw.size / 1024 / 1024 < 1

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 0.4MB!')
      }
      // console.log('222222222222', isLt2M)
      if (isLt2M) {
        this.allowUploadAvatar = true
      } else {
        this.allowUploadAvatar = false
      }
    },
    updateHeadImg () {
      this.myInfo.avatar = ''
      console.log('33', this.$store.state.user.avatar)
      console.log('55', this.myInfo.avatar)
    },
    uploadHeadImg () {
      let that = this
      var reader = new FileReader()
      let avatar = ''
      // console.log('9999999____________', this.$refs.uploadAvatar.uploadFiles)
      reader.readAsDataURL(this.$refs.uploadAvatar.uploadFiles[this.$refs.uploadAvatar.uploadFiles.length - 1].raw)
      reader.onload = function (e) {
        avatar = e.target.result
        // console.log('4444444', avatar)
        that.$post('/admin/uploadHeadImage', {avatar: avatar, userName: that.$store.state.user.userName}).then(res => {
          if (res.flag) {
            that.$message.success('上传头像成功!')
            this.myInfo = res.data
            that.$store.commit('setUser', res.data)
            that.allowUploadAvatar = false
          } else {
            that.allowUploadAvatar = true
          }
        })
      }
    }
  },
  filters: {
    'formatSex': function (params) {
      console.log('性别', params)
      if (params === 0) {
        return '男'
      } else if (params === 1) {
        return '女'
      } else {
        return '保密'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.mycenterpage{
  display: flex;
  flex-wrap: nowrap;
  .userInfo{
    width: 70%;
    padding: 3%;
  }
  .userHeadImg{
    // display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 25%;
    height: auto;
    .headImgBox{
      margin-top: 20px;
      img{
        margin: 0 auto;
      }
      span{
        width: 100%;
        text-align: center
      }
    }
  }
}

.avatar-uploader{
  // border: 1px solid #409EFF;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ccc;
    display: block;
    overflow: hidden;
  }
  .userInfo{
    >>>.el-col{
      margin: 20px 0;
      text-align: left;
    }
  }
</style>
