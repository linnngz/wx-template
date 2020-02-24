// pages/components/ygHuiyuan/kcDetail/kcDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    kcid: {
      type: String,
      value: ''
    }
  },
  attached() { // 自执行函数触发：第二种方式通过组件的生命周期函数执行代码
    // console.log(this.data.kcid)
  },
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    openCoachDetail (e) {
      let componentParams = {
        levels: e.currentTarget.dataset.levels, // 组件层级名称（String 类型）
        name: 'hy_coachDetail', // 将要打开的组件的名称
        navback: true,
        tabbar: false,
        coachid: e.currentTarget.dataset.coachid
      }
      this.triggerEvent('sendComponentParams', JSON.stringify(componentParams))
    }
  }
})
