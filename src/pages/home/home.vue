<template>
  <div class="homePage">
    <h2 style='text-align:center;padding:15px 0'>项目介绍</h2>
    <h3 class='paddTopBom8'>前端</h3>
    <el-row>
      <el-col :span='24'>项目<a href="#" target="_blank">github</a>地址</el-col>
      <el-col :span='24'>1.使用vue.js</el-col>
      <el-col :span='24'>2.使用Element-UI框架</el-col>
      <el-col :span='24'>3.使用axios发起ajax请求</el-col>
      <el-col :span='24'>4.使用vue-i18n做国际化</el-col>
      <el-col :span='24'>5.使用vue-router管理路由</el-col>
    </el-row>

    <h3 class='paddTopBom8'>后端</h3>
    <el-row>
      <el-col :span='24'>项目<a href="#" target="_blank">github</a>地址</el-col>
      <el-col :span='24'>1.使用python3.0</el-col>
      <el-col :span='24'>2.使用flask框架</el-col>
      <el-col :span='24'>3.使用flask_SQLAIchemy作为ORM框架</el-col>
      <el-col :span='24'>4.使用itsdangerous做token身份验证，密码加密（session的拓展性差，比如我们有两台服务器A和B,第一次在A上我们生成了session,但是在B上是没有session的，所以使用token来做用户身份识别）</el-col>
      <el-col :span='24'>5.使用flasgger做api接口文档及在线验证 <a href="http://127.0.0.1:5000/apidocs/#/%E7%94%A8%E6%88%B7%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3/get_admin_login" target="_blank" rel="noopener noreferrer">点此访问</a></el-col>
    </el-row>
    <h3 class='paddTopBom8'>已完成的功能</h3>
    <el-row>
      <el-col :span='24'>1.用户的增删查(注册时用户名，手机号，邮箱必须为未注册的)</el-col>
      <el-col :span='24'>2.用户头像上传存储在数据库</el-col>
      <el-col :span='24'>3.数据查询的分页功能</el-col>
      <el-col :span='24'>4.用户登录密码hash校验 md5加密(前端做一次md5加密，后端会将加密的密文再做一次md5加密,每次登陆会将比较二次MD5加密的值)</el-col>
      <el-col :span='24'>5.用户通过token校验身份，防止第三方恶意调用接口</el-col>
      <el-col :span='24'>6.python生成用户日志文件</el-col>
      <el-col :span='24'>5.数据导出excel表格使用xlwt(实现数据导出到excel表格,设置表格的宽高，对齐方式，表格的字体，字体颜色，背景颜色。合并单元格等功能)<img src="https://img-blog.csdn.net/20171026140946662?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzgzNzc1MjM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt="" srcset=""></el-col>

    </el-row>
    <h3 class='paddTopBom8'>待开发的功能</h3>
    <el-row>
      <el-col :span='24'>1.使用flask-mail做验证码用来做用户修改密码的凭证</el-col>
      <el-col :span='24'>2.用户的修改接口编写</el-col>
      <el-col :span='24'>3.检测api接口的状态</el-col>
      <el-col :span='24'>4.用户的操作行为记录 比如:点击删除用户，登录等(继续完善中)</el-col>
      <el-col :span='24'>6.并发操作处理(难点)</el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {

  }
}
</script>

<style scoped lang="scss">
.homePage{
  text-align: left;
  a{
    color: blue;
  }
  .paddTopBom8{
    padding: 8px 0;
  }
  .paddTopBom15{
    padding: 15px 0;
  }
  .el-row{
    margin-bottom: 15px;
    .el-col{
      margin-bottom: 10px;
    }
  }
}
</style>
