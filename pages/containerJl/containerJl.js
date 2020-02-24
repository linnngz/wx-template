// pages/containerJl/containerJl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: 'coach', // 当前登录的角色
    activeComponentName: 'jl_gym', // 激活的组件名称 默认为健身房
    componentParams: { tabbar: true } // 子组件传过来的参数
  },
  onLoad: function (options) {
    this.getRole() // 获取登录角色
    this.getActiveComponentName() // 获取激活的组件名称
  },
  // 获取页面中子组件传递过来的参数
  getComponentParams(e) {
    let tmp = JSON.parse(e.detail)
    this.setData({ componentParams: tmp, activeComponentName: tmp.name })
  },
  // 获取激活的组件名称
  getActiveComponentName(e) {
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