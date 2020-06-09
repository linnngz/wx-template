// pages/common/login.js
const app = getApp()
Page({
  data: {
    roles: [],
    checkedRole: '',
    pageParams: { showtab: true }  // 子组件向父页面即容器中传递的数据，该参数中的 showtab 属性要显式设置，且默认值为true
  },

  onLoad (options) {
    this.setRoleData()
    console.log(options)
  },

  // 后退
  toPrevPage () {
    wx.navigateBack()
  },

  // 设置角色选项
  setRoleData () {
    let _this = this

    let result = []
    app.globalData.roleData.forEach((item) => {
      if (item.checked) {
        _this.setData({checkedRole: item.type})
      }
      result.push({type: item.type, value: item.name, checked: item.checked})
    })
    _this.setData({ roles: result})
  },

  // 切换角色
  roleChange: function (e) {
    this.setData({ checkedRole: e.detail.value })
  },
  // 获取组件数据并设置active的组件
  setCompData(e) {
    let _this = this
    console.log(e)
    let pagedata = e.detail
    _this.setData({pageParams: pagedata })
  },

  // 获取微信授权
  bindGetUserInfo: function (e) {
    let _this = this
    console.log(e)
    if (e.detail.userInfo) { // 允许授权
      wx.showToast({title: '授权成功', icon: 'none', duration: 2000})
      wx.setStorage({key: 'userWxInfo', data: e.detail.userInfo})
      _this.login()
      // wx.navigateBack()
    } else { // 点击拒绝授权
      wx.showModal({
        title: '提示',
        content: '您拒绝了授权，将无法登录小程序，请重新授权之后再进入。',
        showCancel: true,
        cancelText: '返回',
        confirmText: '重新授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击重新授权')
          } else if (res.cancel) {
            console.log('用户点击返回')
            wx.navigateBack() // 返回上级页面
          }
        }
      })
    }
  },

  // 点击登录 分别跳转到不同角色的容器页面
  login() {
    let _this = this
    let type = _this.data.checkedRole

    wx.setStorage({ key: 'role', data: type }) // 将登录的角色信息存储到缓存中 退出登录功能不要删除缓存中的role数据
    app.globalData.loggedRole = type  // 将登录的角色信息存储到全局变量中

    if (type === 'hy') { // 会员端
      wx.switchTab({ url: '../../container/hy/hy' })
    } else if (type === 'jl') { // 教练端
      wx.switchTab({ url: '../../container/jl/jl' })
    } else if (type === 'xs') { // 销售端
      wx.switchTab({ url: '../../container/xs/xs' })
    }
  }
})