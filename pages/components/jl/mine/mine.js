// pages/components/hy/mine/mine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userWxInfo: {
      type: Object,
      value: {}
    }
  },
  data: {},

  attached () {
    this.clearUserInfoFromData()
  },
  methods: {
    // 点击登录 打开登录页
    toLogin (e) {
      wx.navigateTo({ url: '../../common/login/login' })

      // let navParams = {
      //   navback: true,
      //   levels: ''
      // }
      // wx.navigateTo({ url: '../../common/login/login?navParams=' + JSON.stringify(navParams) })
    },

    // 退出登录
    toLogout (e) {
      let _this = this
      // wx.setStorage({key: 'userWxInfo',data: {}})
      wx.removeStorage({
        key: 'userWxInfo',
        success(res) {
          // console.log(res)
          _this.setData({ userWxInfo: {} })
        }
      })
      
    },

    // 清除本地缓存登录信息
    clearUserInfoFromData () {
      let _this = this
      wx.getStorage({
        key: 'userWxInfo',
        success: function (res) {},
        fail: function (err) {
          _this.setData({ userWxInfo: {} })
        }
      })
    }
  }
})
