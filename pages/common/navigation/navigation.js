// pages/components/navigation/navigation.js
let app = getApp()
Component({
  externalClasses: ['parent-class'],
  properties: {
    title: { type: String, value: '' },
    topClass: { type: String, value: '' },
    titleClass: { type: String, value: '' },
    titleTextClass: { type: String, value: '' },
    showBack: { type: Boolean, value: false },
    showBackText: { type: String, value: '返回' },
    showHome: { type: Boolean, value: false },
    homePath: { type: String, value: '' },
    homeOpenType: { type: String, value: '' },
    background: { type: String, value: '' },
    showShadow: { type: Boolean, value: true },
    backtype: { type: String, value: 'comp' }, // 后退类型, 默认为comp类型，即容器内组件的后退，只需控制组件的显隐，执行当前的goback函数；登录页面单独设置为page类型，为页面级后退，可调用微信后退api，执行自定义函数
    compLevels: { type: String, value: '' }    // 后退功能所需指定后退到哪个页面(组件)，通过组件名称实现
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      var t = this
      let { showNavigationBarLoading, hideNavigationBarLoading } = Object.assign({}, wx)
      wx._showNavigationBarLoading || wx.__defineGetter__('showNavigationBarLoading', function () {
        wx._showNavigationBarLoading = 1
        return function (o) {
          var p = getCurrentPages().pop() || {},
            cb = p ? p.selectComponent('#c-bar') : false
          cb && cb.setData && cb.setData({
            loading: !0
          })

          return showNavigationBarLoading(o)
        }
      })
      wx._hideNavigationBarLoading || wx.__defineGetter__('hideNavigationBarLoading', function () {
        wx._hideNavigationBarLoading = 1
        return function (o) {
          var p = getCurrentPages().pop() || {},
            cb = p ? p.selectComponent('#c-bar') : false
          cb && cb.setData && cb.setData({
            loading: !1
          })
          return hideNavigationBarLoading(o)
        }
      })
    },
    hide: function () { },
    resize: function () { },
  },
  attached () {
    // console.log(this.data.backtype)
  },
  data: {
    custom: wx.getMenuButtonBoundingClientRect(),
    cBarHeight: 68,
    cBarTitleTop: 20,
    cBarTitleHeight: 68,
    cBarTitlePaddingTop: 20,
    isiPad: /^ipad/i.test(app.globalData.systemInfo.model || ''),
    canvasHeight: 300,
    canvasWidth: 300
  },
  observers: {},
  ready: function () {
    let t = this, ps = getCurrentPages()
    // t.setData({
    //   hPath: t.data.homePath ? t.data.homePath : '/pages/index/index',
    //   hOpenType: t.data.homeOpenType ? t.data.homeOpenType : 'switchTab',
    //   navBackType: ps.length <= 1 ? 'switchTab' : 'navigateBack',
    //   title: t.data.title || app.globalData.appName
    // })

    wx.getSystemInfo({
      success: e => {
        let sH = e.statusBarHeight,
          // bH = t.data.custom.bottom + t.data.custom.top - sH
          bH = t.data.custom.bottom * 2 - t.data.custom.height - sH
        bH = bH < t.data.cBarHeight ? t.data.cBarHeight : bH
        ps[ps.length - 1].setData({
          addMiniTop: t.data.custom.top + t.data.custom.height + 10,
          addMiniRight: Math.ceil(3 * t.data.custom.width / 4) - 6
        })
        t.setData({
          cBarHeight: t.data.height || bH,
          cBarTitleTop: t.data.titleTop || sH,
          cBarTitleHeight: t.data.titleHeight || bH,
          cBarTitlePaddingTop: t.data.titlePaddingTop || sH
        })
      }
    })
  },
  methods: {
    // 后退 根据存储的componentLevels中的数据确定后退到那个页面 (拆分成数组后取倒数第二项)
    goBack (e) {
      let _this = this
      if (_this.data.backtype === 'page') { // 页面级后退
        wx.navigateBack()
      } else { // 组件级后退
        // console.log(e, _this.data.compLevels)
        let levels = _this.data.compLevels.split(',')
        let len = levels.length
        let compData = {}
        if (len <= 2) { // 已经后退到一级页面 不能再后退了
          compData = {
            levels: levels[0],
            name: levels[0],
            navback: false,
            showtab: true
          }
        } else { // 还没有后退到第一级页面的情况
          // console.log(levels.slice(0, len - 1))
          compData = {
            levels: levels.slice(0, len - 1),
            name: levels[len - 2],
            navback: true,
            showtab: false
          }
        }
        _this.triggerEvent('goBack', compData)
      }
      
    }
  }
})
