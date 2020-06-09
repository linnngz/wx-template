// pages/components/hy/kcdetail/kcdetail.js
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
    // 打开教练详情页
    toJlDetail (e) {
      console.log(e)
      let compData = {
        levels: e.currentTarget.dataset.levels, // 当前激活的组件名称
        name: 'jlDetail',                       // 将要打开的页面(组件)的名称
        navback: true,
        showtab: false,
        jlid: e.currentTarget.dataset.jlid
      }
      this.triggerEvent('sendCompData', compData)
    }
  }
})
