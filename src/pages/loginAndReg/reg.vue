<template>
  <div class="loginpage">
    <h2 class='projectTitle'>{{$t('projectTitle')}}</h2>
    <div class="reg">
      <el-form :model="regForm" :rules="rules" ref="regForm" label-width="auto" label-position="left">
        <el-form-item :label="$t('userName')" prop="userName">
          <el-input v-model.trim="regForm.userName" :placeholder="$t('placeholder.inputUserName')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('pwd')" prop="passWord">
          <el-input v-model.trim="regForm.passWord" :placeholder="$t('placeholder.inputpwd')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('telPhone')" prop="telPhone">
          <el-input v-model.trim="regForm.telPhone" :placeholder="$t('placeholder.plsInput')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('name')" prop="normal">
          <el-input v-model.trim="regForm.name" :placeholder="$t('placeholder.plsInput')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('sex')" prop="normal">
          <el-radio-group v-model="regForm.sex">
                <el-radio-button label="0">{{$t('man')}}</el-radio-button>
                <el-radio-button label="1">{{$t('women')}}</el-radio-button>
                <el-radio-button label="2">{{$t('baomi')}}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('email')" prop="normal">
          <el-input v-model.trim="regForm.email" :placeholder="$t('placeholder.plsInput')"></el-input>
        </el-form-item>
      </el-form>
      <div class="btnGroup">
        <el-button @click="$router.push('/login')">去登陆</el-button>
        <el-button @click='reset'>重置</el-button>
        <el-button type="primary" @click="reg">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
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
      radio: 'login',
      isReging: false,
      regForm: {
        userName: '', // 用户名
        name: '', // 真实姓名
        passWord: '', // 密码
        sex: '', // 性别 0男 1女 2保密
        email: '', // 邮箱
        telPhone: ''// 电话
      },
      rules: {
        userName: [
          { required: true, message: this.$t('placeholder.inputError'), trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: this.$t('placeholder.inputError'), trigger: 'blur' },
          { validator: checkPwd, trigger: 'blur' }
        ],
        telPhone: [
          { required: true, message: this.$t('placeholder.inputError'), trigger: 'blur' }
        ],
        normal: [
          { required: false, trigger: 'blur' }
        ]
      }
    }
  },
  components: {},
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    reset () {
      this.$refs.regForm.resetFields()
    },
    reg () {
      console.log('this.ruleForm', this.userForm)
      this.$refs.regForm.validate(async (valid) => {
        if (valid) {
          const res = await this.$get('/reg', this.regForm)
          console.log('返回的数据', res)
          if (res && res.flag) {
            this.$message({type: 'success', message: '注册成功,请返回登录页面登录'})
            // this.reset()
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

.reg{
  width: 300px;
  margin: 0 auto;
  padding-top: 10vh;
}
>>>.el-form-item__label-wrap{
    margin-left: 0 !important;
}
.projectTitle{
    text-align: center;
    font-size: 23px;
    padding: 0vh 0;
    color: #fff;
}
</style>
