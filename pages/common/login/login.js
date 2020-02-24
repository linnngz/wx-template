// pages/common/login.js
const app = getApp()
Page({
  data: {
    checkedRole: 'member',
    roles: [
      { name: 'member', value: '会员', checked: 'true' },
      { name: 'coach', value: '教练' },
      { name: 'sale', value: '销售' }
    ],
    componentParams: { tabbar: false } // 子组件传过来的参数
  },
  onLoad: function (options) {},
  radioChange: function (e) {
    this.setData({ checkedRole: e.detail.value })
  },
  // 获取页面中子组件传递过来的参数
  getComponentParams(e) {
    let tmp = JSON.parse(e.detail)
    this.setData({ componentParams: tmp }) // activeComponentName: tmp.name 
  },

  // 点击登录
  login () {
    let _this = this
    let role = _this.data.checkedRole

    wx.setStorage({ key: 'userInfo', data: JSON.stringify({role: role}) }) // 将登录的角色信息存储到缓存中

    if (role === 'member') { // 会员端
      wx.switchTab({ url: '../../containerHy/containerHy' })
    } else if (role === 'coach') { // 教练端
      wx.switchTab({ url: '../../containerJl/containerJl' })
    } else if (role === 'sale') { // 销售端
      wx.switchTab({ url: '../../containerXs/containerXs' })
    }
  },

  onShareAppMessage: function () {}
})