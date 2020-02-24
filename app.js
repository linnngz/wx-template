//app.js
App({
  onLaunch () {
    
  },
  globalData: {
    userInfo: null,
    systemInfo: wx.getSystemInfoSync() || {},
    statusBarHeight: 0,
    customBarHeight: 0
  },
  getMainAreaHeight: (t) => {
    var t = t || getCurrentPages().pop()
    return new Promise((rs, rj) => {
      t.selectComponent('#f-bar') ? wx.createSelectorQuery().in(t.selectComponent('#f-bar')).select('.tabBar').boundingClientRect()
        .exec(function (res) {
          var fH = res && res[0] ? res[0].height : 0
          t.selectComponent('#c-bar') ? wx.createSelectorQuery().in(t.selectComponent('#c-bar')).select('.cu-custom').boundingClientRect()
            .exec(function (res) {
              var cH = res && res[0] ? res[0].height : 0
              rs(cH + fH)
            }) : rs(fH)
        }) : rs(0)
    })
  }
})