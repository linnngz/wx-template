// pages/components/tabbar/tabbar.js
const app = getApp()
Component({
  properties: {
    show: { // 是否显示 tabbar，有些页面可能不需要展示tabbar
      type: Boolean,
      value: true
    },
    activeIdx: { // active的tabbar的索引，默认为0
      type: Number,
      value: 0
    }
  },

  data: {
    role: '',    // 登录用户的角色 默认为会员  tabbar会根据该字段的值展示不同角色的tabbar的内容
    tablist: []  // tabbar数据
  },

  // 自执行函数触发：第二种方式通过组件的生命周期函数执行代码
  attached() {
    console.log(app.globalData)
    this.setRole()
    this.setTabList()
  },

  methods: {
    // 设置角色 （此时的角色数据来自于执行登录时选择的角色）
    setRole () {
      this.setData({ role: app.globalData.loggedRole })
    },
    
    // 设置角色的tabbar的数据
    setTabList () {
      let _this = this
      
      app.globalData.roleData.forEach((item) => {
        if (_this.data.role === item.type) {
          _this.setData({ tablist: item.tablist})
        }
      })
    },

    // 点击tabbar切换页面（此处切换页面并非小程序中的切换tabbar, 而是仅仅控制容器中相应组件的显示与隐藏 和 设置自定义tabbar中的active项）
    changeTab (e) {
      let _this = this

      let idx = Number(e.currentTarget.dataset.index)
      // _this.setData({ activeIdx: idx })
      _this.triggerEvent('changeTab', {activeTabIdx: idx})
    }
  }
})
