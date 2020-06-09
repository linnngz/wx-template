//app.js
App({
  onLaunch: function () {
    let type = this.globalData.loggedRole
    if (type === 'hy') { // 会员端
      wx.switchTab({ url: '/pages/container/hy/hy' })
    } else if (type === 'jl') { // 教练端
      wx.switchTab({ url: '/pages/container/jl/jl' })
    } else if (type === 'xs') { // 销售端
      wx.switchTab({ url: '/pages/container/xs/xs' })
    }
  },
  globalData: {
    systemInfo: wx.getSystemInfoSync() || {},
    statusBarHeight: 0,
    customBarHeight: 0,
    loggedRole: wx.getStorageSync('role') ? wx.getStorageSync('role') : 'hy', // 当前登录的角色  默认为会员类型
    roleData: [     // 角色对应的页面配置数据
      {
        type: 'hy',
        name: '会员',
        checked: true, // 多个角色只能有一个checked属性为true
        tablist: [
          { name: '首页', compName: 'hyIndex', iconPath: '../../../imgs/hy/ico_house.png', selectedIconPath: '../../../imgs/hy/ico_house_act.png' },
          { name: '推荐', compName: 'hyRec', iconPath: '../../../imgs/hy/ico_rec.png', selectedIconPath: '../../../imgs/hy/ico_rec_act.png' },
          { name: '消息', compName: 'hyMsg', iconPath: '../../../imgs/hy/ico_msg.png', selectedIconPath: '../../../imgs/hy/ico_msg_act.png' },
          { name: '我的', compName: 'hyMine', iconPath: '../../../imgs/hy/ico_mine.png', selectedIconPath: '../../../imgs/hy/ico_mine_act.png' }
        ]
      },
      {
        type: 'jl',
        name: '教练',
        checked: false,
        tablist: [
          { name: '健身房', compName: 'jlGym', iconPath: '../../../imgs/jl/ico_gym.png', selectedIconPath: '../../../imgs/jl/ico_gym_act.png' },
          { name: '消息', compName: 'jlMsg', iconPath: '../../../imgs/jl/ico_msg.png', selectedIconPath: '../../../imgs/jl/ico_msg_act.png' },
          { name: '我的', compName: 'jlMine', iconPath: '../../../imgs/jl/ico_mine.png', selectedIconPath: '../../../imgs/jl/ico_mine_act.png' },
        ]
      },
      {
        type: 'xs',
        name: '销售',
        checked: false,
        tablist: [
          { name: '健身房', compName: 'xsGym', iconPath: '../../../imgs/xs/ico_gym.png', selectedIconPath: '../../../imgs/xs/ico_gym_act.png' },
          { name: '消息', compName: 'xsMsg', iconPath: '../../../imgs/xs/ico_msg.png', selectedIconPath: '../../../imgs/xs/ico_msg_act.png' },
          { name: '我的', compName: 'xsMine', iconPath: '../../../imgs/xs/ico_mine.png', selectedIconPath: '../../../imgs/xs/ico_mine_act.png' },
        ]
      }
    ]
  },
  // 获取角色对应的tablist数据
  getRoleTabData (role, arr) {
    let result = []
    arr.forEach((item) => {
      if (role === item.type) {
        result = item.tablist
      }
    })
    
    return result
  }
  // 获取容器组件
  // getComps (loggedRole, roleData) {
  //   let result = []
  //   let len = roleData.length
  //   for (let i=0; i<len; i++) {
  //     if (roleData[i].type === loggedRole) {
  //       result = roleData[i].comps
  //     }
  //   }

  //   return result
  // }
  // 获取登录角色
  // getLoggedRole() {
  //   return JSON.parse(wx.getStorageSync('userInfo')).role
  // },
})