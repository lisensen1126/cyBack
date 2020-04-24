<template>
  <div class="manageUserpage" name='用户管理组件'>
    <el-row style='margin:5px 0' type='flex'>
        <div style='display:flex;margin-right:10px;width:300px;'>
					<el-input v-model='searchWord' placeholder='请输入(支持模糊搜索)' clearable @keyup.enter.native="getUserList">
						<el-select v-model="selectSearchType" slot="prepend" placeholder="请选择">
							<el-option label="用户名" value="userName"></el-option>
							<el-option label="手机号码" value="phone"></el-option>
						</el-select>
					</el-input>
				</div>
				<el-button icon="el-icon-search" type='primary' @click='getUserList'>搜索</el-button><el-button icon="el-icon-circle-plus" type="success" @click='addAdminUser()'>添加</el-button>
    </el-row>
    <el-row>
        <el-table :data="userList" style="width: 100%" border>
            <el-table-column prop="id" label="id" sortable width='60px' header-align='center' align='center'></el-table-column>
            <el-table-column prop="userName" label="用户名" width='120px' header-align='center' align='left'></el-table-column>
            <el-table-column prop="name" label="姓名" width='120px' header-align='center' align='center'>
						</el-table-column>
						<el-table-column prop="sex" label="性别" width='80px' header-align='center' align='center' :formatter='formatSexType'>
							<template slot-scope="scope">
								<el-tag :type="formatSexType(scope.row.sex)" disable-transitions effect="plain">{{scope.row.sex |formatSex}}</el-tag>
							</template>
						</el-table-column>
						<el-table-column prop="email" label="邮箱" header-align='center' align='left'>
							<template slot-scope="scope">
								<i class="el-icon-message" v-if='scope.row.email'></i>
								<span>{{ scope.row.email }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="telPhone" label="电话" width='120px' header-align='center' align='center'>
							<template slot-scope="scope">
								<i class="el-icon-phone"></i>
								<span>{{ scope.row.phone }}</span>
							</template>
						</el-table-column>
						<el-table-column label="注册时间" sortable header-align='center' align='left'>
							<template slot-scope="scope">
								<i class="el-icon-time"></i>
								<span>{{ scope.row.createTime }}</span>
							</template>
						</el-table-column>
						<el-table-column label="操作"  header-align='center' align='center' width='182px'>
							<template slot-scope="scope">
								<el-button
									size="mini"
									icon="el-icon-edit"
									type="info"
									@click="updateUser(scope.$index, scope.row)">编辑</el-button>
								<el-button
									size="mini"
									icon="el-icon-delete"
									type="danger"
									@click="deleteUser(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
        </el-table>
    </el-row>
	<el-row>
		<el-pagination hide-on-single-page background layout="prev, pager, next" :pager-count="7" :total="pageData.dataTotal" @current-change="getUserList" :current-page.sync="pageData.currentPage" :page-size="pageData.pageSize"></el-pagination>
	</el-row>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      userList: [],
      searchWord: '',
      selectSearchType: 'userName',
      pageData: {
        dataTotal: 0,
        currentPage: 1,
        pageSize: this.$store.state.pageSize
      },
      count: 1
    }
  },
  components: {},
  computed: {},
  created () {
    this.getUserList()
  },
  mounted () {},
  watch: {},
  methods: {
    // 获取所有用户 带分页功能 每页最大显示15条(后台控制)
    getUserList () {
      let params = {
        currentPage: this.pageData.currentPage,
        pageSize: this.$store.state.pageSize
      }
      if (this.searchWord) {
        params[this.selectSearchType] = this.searchWord
      }
      this.$get('/admin/getadminUserList', params).then(res => {
        if (res.flag) {
          console.log('获取到的所有用户列表', res)
          this.userList = res.data.userList
          this.pageData.dataTotal = res.data.total
        }
      })
    },
    // 根据性别计算tag的状态
    formatSexType (type) {
      if (type === '0') {
        return 'warning'
      } else if (type === '1') {
        return 'success'
      } else if (type === '2') {
        return 'danger'
      }
    },
    // 编辑用户信息
    async updateUser (index, userInfo) {
      console.log('index,row', index, userInfo)
      let res = await this.$post('/updateUserInfo', userInfo)
      console.log('res 更新结果', res)
    },
    // 添加用户(需管理员权限)
    async addAdminUser () {
      this.count++
      console.log('count', this.count)
      let userInfo = {
        userName: 'userName56' + this.count,
        passWord: 'password2' + this.count,
        email: 'email56' + this.count,
        phone: '4456' + this.count,
        sex: 1,
        name: '1232'
      }
      let res = await this.$post('/admin/regAdminUser', userInfo)
      console.log('ressssssss', res)
      if (res.flag) {
        this.$message({type: 'success', message: `Hi ${res.msg} `})
        this.getUserList()
      }
      // if(res.data)
    },
    // 通过id去删除用户
    deleteUser (index, user) {
      console.log('user', user.id)
      this.$delete(`/admin/deleteUser/${user.id}`).then(res => {
        if (res.flag) {
          this.$message({type: 'success', message: `Hi ${res.msg} `})
          this.getUserList()
        }
      }).catch(err => {
        console.log('err', err)
      })
    }

  },
  filters: {
    'formatSex': function (params) {
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
.el-tag--plain{
	background: transparent !important;
	border: 1px solid #f96 !important;
}
</style>
