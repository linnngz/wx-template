// pages/container/xs/xs.js
const app = getApp()
Page({
  data: {
    activeComp: 'hyIndex',
    activeTabIdx: 0,
    showTab: true
  },

  onLoad: function (options) {
    // this.setActiveComp()
    this.getCustTabData()
  },

  onShow: function () { },

  // 获取tabbar数据并设置active的tab
  getCustTabData(e) {
    console.log(e)
    let _this = this
    let activeTabIdx = e ? e.detail.activeTabIdx : 0
    _this.setData({ activeTabIdx: activeTabIdx })
    let tabdata = app.getRoleTabData(app.globalData.loggedRole, app.globalData.roleData)

    tabdata.forEach((item, idx) => {
      if (idx === activeTabIdx) {
        _this.setData({ activeComp: item.compName })
      }
    })
  },

  onHide: function () { },

  onPullDownRefresh: function () { },

  onReachBottom: function () { },

  onShareAppMessage: function () { }
})