// pages/containerHy/containerHy.js
Page({
  data: {
    role: 'member', // 当前登录的角色
    activeComponentName: 'hy_home', // 激活的组件名称
    componentParams: {tabbar: true} // 子组件传过来的参数
  },
  onLoad: function (options) {
    this.getRole() // 获取登录角色
    this.getActiveComponentName() // 获取激活的组件名称
    // this.getComponentParams()
  },
  onShow: function () {},
  // 获取页面中子组件传递过来的参数
  getComponentParams (e) {
    console.log(e)
    let tmp = JSON.parse(e.detail)
    this.setData({ componentParams: tmp, activeComponentName: tmp.name })
  },
  // 获取激活的组件名称
  getActiveComponentName(e) {
    // console.log(e)
    if (e) this.setData({ activeComponentName: e.detail })
  },
  // 获取登录角色
  getRole() {
    let _this = this
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        if (res.errMsg === 'getStorage:ok') {
          let resData = JSON.parse(res.data)
          _this.setData({ role: resData.role })
          console.log('登录角色：' + _this.data.role)
        } else {
          console.log('登录出错')
        }
      },
    })
  },
  onShareAppMessage: function () {}
})