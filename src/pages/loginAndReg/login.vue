<template>
  <div class="loginpage">
    <div class='loginForm'>
<div class="login">
      <el-form :model="userForm"
               :rules="rules"
               ref="userForm"
               label-width="auto"
               :label-position="'left'"
               class="demo-ruleForm">
        <el-form-item :label="$t('userName')" prop="userName">
          <el-input v-model.trim="userForm.userName" :placeholder="$t('placeholder.inputUserName')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('pwd')" prop="passWord">
          <el-input v-model.trim="userForm.passWord" :placeholder="$t('placeholder.inputpwd')" show-password></el-input>
        </el-form-item>
      </el-form>
      <div class="btnGroup">
        <el-button type="primary" @click="$router.push('/reg')">去注册</el-button>
        <el-button type="primary" @click="submitForm('userForm')">登陆</el-button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import switchLocal from '@/components/switchLocal'
import md5 from 'js-md5'
export default {
  data () {
    var checkPwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else if (Number(value)) {
        callback(new Error('密码不能为纯数字'))
      } else {
        callback()
      }
    }
    return {
      value1: '',
      radio: 'login',
      isReging: false,
      userForm: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { required: true, message: this.$t('placeholder.inputError'), trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: this.$t('placeholder.inputError'), trigger: 'blur' },
          { validator: checkPwd, trigger: 'blur' }
        ] }
    }
  },
  components: {switchLocal},
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    submitForm (userForm) {
      console.log('this.ruleForm', this.userForm)
      this.$refs[userForm].validate(async (valid) => {
        if (valid) {
          let loginData = Object.assign({}, this.userForm)
          loginData.passWord = md5(this.userForm.passWord)
          const res = await this.$get('/admin/login', loginData)
          console.log('返回的数据', res)
          if (res && res.flag) {
            let currentUser = res.data.userInfo
            if (res.data.token) {
              this.$store.commit('setToken', res.data.token)
            }
            this.$store.commit('setUser', currentUser)
            this.$message({type: 'success', message: `Hi ${this.$store.state.user.userName} 欢迎你`})
            this.$router.push('/home')
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.loginForm{
  // flex:1;
  margin-top: 10vh;
  display: flex;
  align-items: center;
}
.login{
  width: 300px;
  margin: 0 auto;
  padding: 5vh 5vw;
  box-shadow: 0 0 3px 2px #FF9966;
  background: #6f60aa;

}
.loginpage{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 2vh 2vw;
}
>>>.el-form-item__label-wrap{
    margin-left: 0 !important;
}
.btnGroup{
  margin-top: 3vh
}
.projectTitle{
    text-align: center;
    font-size: 23px;
    padding: 0vh 0;
    color: #fff;
}
</style>
