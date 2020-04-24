<template>
  <div class="adminUserLogsPage">
    <p>日志系统</p>
    <div class="logsTable">
      <el-table
      :data="logsList"
      style="width: 100%">
      <el-table-column prop="id" label="" width="40" header-align='center' align='center'></el-table-column>
      <el-table-column prop="operateUserName" label="操作者用户名" width="100" header-align='center' align='center'></el-table-column>
      <el-table-column prop="operateName" label="操作者姓名" width="100" header-align='center' align='center'></el-table-column>
      <el-table-column prop="operateMsg" label="日志" header-align='center' align='left'></el-table-column>
      <el-table-column width="135" prop="operateTime" label="记录时间" header-align='center' align='left'></el-table-column>
    </el-table>
    </div>
    <el-row>
		<el-pagination hide-on-single-page background layout="prev, pager, next" :pager-count="7" :total="pageData.dataTotal" @current-change="getAdminUserLogs" :current-page.sync="pageData.currentPage" :page-size="pageData.pageSize"></el-pagination>
	</el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logsList: [],
      pageData: {
        dataTotal: 0,
        currentPage: 1,
        pageSize: this.$store.state.pageSize
      }
    }
  },
  components: {},
  computed: {},
  created () {
    this.getAdminUserLogs()
  },
  mounted () {},
  watch: {},
  methods: {
    getAdminUserLogs () {
      let params = {
        currentPage: this.pageData.currentPage,
        pageSize: this.$store.state.pageSize
      }
      this.$get('/admin/adminUserLogs', params).then(res => {
        console.log('日志记录', res)
        this.logsList = res.data.logsList
        this.pageData.dataTotal = res.data.total
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.adminUserLogsPage{

}
</style>
