const globalMethods = {
  methods: {
    errMsg (err) {
      console.error(err)
    },
    cg (msg) {
      console.log('开发日志', msg)
    }
  }
}

export { globalMethods }
