// 获取登录角色
const getRole = (cb) => {
  // let _this = this

  wx.getStorage({
    key: 'userInfo',
    success: function (res) {
      if (res.errMsg === 'getStorage:ok') {
        let resData = JSON.parse(res.data)
        // _this.setData({ role: resData.role })
        console.log('登录角色：' + resData.role)
        cb(resData.role)
      } else {
        console.log('获取登录角色出错')
      }
    },
    fail: function () { console.log('获取登录角色失败') }
  })
}


module.exports = {
  getRole: getRole
}
