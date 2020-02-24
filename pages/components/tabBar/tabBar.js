// pages/components/tabBar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    role: { // 登录用户的角色
      type: String,
      value: 'member'
    },
    show: { // 是否显示 tabbar
      type: Boolean,
      value: true
    }
  },
  attached () { // 自执行函数触发：第二种方式通过组件的生命周期函数执行代码
    if (this.data.role === 'member') {
      this.setData({ activeName: 'hy_home' })
    } else if (this.data.role === 'coach') {
      this.setData({ activeName: 'jl_gym' })
    } else if (this.data.role === 'sale') {
      this.setData({ activeName: 'xs_gym' })
    }
    console.log(this.data.show)
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeName: 'hy_home' // 默认激活的 tab
  },
  methods: {
    // 导航切换
    tabTap (e) { // e 为点击时传递的参数
      let _this = this
      let tabName = e.currentTarget.dataset.name
      
      _this.setData({ activeName: tabName })
      _this.triggerEvent('tabTap', tabName)
      // if (tabName === 'hy_home') {
      //   // wx.redirectTo({url: '../../ygHuiyuan/index/index'})
      //   _this.setData({ activeName: 'hy_home'})
      // } else if (tabName === 'hy_changguan') {
      //   // wx.redirectTo({ url: '../../ygHuiyuan/changguan/changguan' })
      //   _this.setData({ activeName: 'hy_changguan' })
      // } else if (tabName === 'hy_msg') {
      //   // wx.redirectTo({ url: '../../ygHuiyuan/msg/msg' })
      //   _this.setData({ activeName: 'hy_msg' })
      // } else if (tabName === 'hy_mine') {
      //   // wx.redirectTo({ url: '../../ygHuiyuan/mine/mine' })
      //   _this.setData({ activeName: 'hy_mine' })
      // }
    }
  }
})
