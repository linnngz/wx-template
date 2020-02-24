// pages/components/ygHuiyuan/index/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 打开课程详情页（传递的参数中首先要有组件名称，是否显示navbar的返回按钮，是否显示tabbar，然后再加上其他需要传递的参数）
    openKcDetail (e) {
      // console.log(e)
      let componentParams = {
        levels: e.currentTarget.dataset.levels, // 当前激活的组件名称
        name: 'hy_kcDetail', // 将要打开的页面(组件)的名称
        navback: true,
        tabbar: false,
        kcid: e.currentTarget.dataset.kcid
      }
      this.triggerEvent('sendComponentParams', JSON.stringify(componentParams))
    }
  }
})
