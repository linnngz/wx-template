const app = getApp()
Page({
  data: {
    activeComp: 'jlIndex',          // 容器中 active 的组件的名称
    activeTabIdx: 0,                // 容器中 tabBar 的 active 项的索引值
    pageParams: { showtab: true },  // 子组件向父页面即容器中传递的数据，该参数中的 showtab 属性要显式设置，且默认值为true
    userWxInfo: {}
  },

  onLoad: function (options) {
    // console.log(options)
    this.setTab()
  },

  onShow: function () {
    this.setUserWxInfo()
  },

  // 获取组件数据并设置active的组件
  setCompData(e) {
    let _this = this
    // console.log(e)
    let pagedata = e.detail
    _this.setData({ activeComp: pagedata.name, pageParams: pagedata })
  },

  // 获取tabbar数据并设置active的tab
  setTab(e) {
    // console.log(e)
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

  // 从缓存中获取微信授权的基本信息
  setUserWxInfo() {
    let _this = this
    wx.getStorage({
      key: 'userWxInfo',
      success: function (res) {
        // console.log(res)
        _this.setData({ userWxInfo: res.data })
      }
    })
  },

  onHide: function () { },

  onPullDownRefresh: function () { },

  onReachBottom: function () { },

  onShareAppMessage: function () { }
})
