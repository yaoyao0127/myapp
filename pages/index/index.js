//index.js
//获取app.js中注册的应用实例
const app = getApp()
Page({
  data: {
    motto: "今天也是仙女的一天",
  },
  //事件处理函数
  viewBook:function(){
    wx.navigateTo({
      url: '../book/book',
    })
  },
  viewWord: function () {
    wx.navigateTo({
      url: '../word/word',
    })
  },
  viewSport: function () {
    wx.navigateTo({
      url: '../sport/sport',
    })
  },
  
  onLoad: function () {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      
  },
})
