// book.js
//获取应用实例
const app = getApp()

Page({

  //事件处理函数
  viewBookItem: function () {
    wx.navigateTo({
      url: '../bookItem/bookItem',
    })
  },

  onLoad: function () {
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况

  },
})

