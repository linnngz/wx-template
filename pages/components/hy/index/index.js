// pages/components/hy/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 3
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 打开课程详情页 实质是设置容器中组件的active，同时要隐藏tabbar
    toKcDetail (e) {
      let compData = {
        levels: e.currentTarget.dataset.levels, // 当前激活的组件名称
        name: 'kcDetail', // 将要打开的页面(组件)的名称
        navback: true,
        showtab: false,
        kcid: e.currentTarget.dataset.kcid
      }
      this.triggerEvent('sendCompData', compData)
    },
    // 页面内切换tab
    changeTab (e) {
      // console.log(e)
      let compData = {
        activeTabIdx: Number(e.currentTarget.dataset.totabidx),
        // levels: e.currentTarget.dataset.levels, // 组件层级名称（String 类型）
        // name: 'hy_changguan', // 将要打开的组件的名称
        navback: false,
        showtab: true
      }
      this.triggerEvent('changeTab', compData)
    }
  }
})
