const app = getApp()

// pages/bus/bus.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   stopList: [{ "id": 0, "sid": null, "stopType": null, "stopId": "1.", "stopName": "aspirin" }, { "id": 0, "sid": null, "stopType": null, "stopId": "2.", "stopName": "航城五路施湾二路" }, { "id": 0, "sid": null, "stopType": null, "stopId": "3.", "stopName": "施湾三路航城五路" }]
  // },

data: {
    userInfo: [{'id': 0, 'sid': null, "infoName": "Sex:  ", "infoValue": "Male"},
    {'id': 0, 'sid': null, "infoName": "DOA:  ", "infoValue": "2000-09-21"},
    {'id': 0, 'sid': null, "infoName": "Address:  ", "infoValue": "xxx"}]
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({ 
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})