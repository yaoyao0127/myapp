// pages/wordItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word1:'abbreviation',
    meaning1:'n.节略，缩写，缩短',
    word2:'abide ',
    meaning2:'vt.遵守 vt.忍受',
    word3: 'abolish',
    meaning3: 'vt.废除，取消',
    word4: 'absent ',
    meaning4: 'a.不在意的',
    word5: 'absorption',
    meaning5: 'n.吸收；专注',
  },
  // 点击事件
  viewNextPage:function(){
    this.setData({
      word1: 'comprehension',
      meaning1: 'n.理解，理解力',
      word2: 'successive',
      meaning2: 'adj.逐次,连续的',
      word3: 'contribute',
      meaning3: 'vt.& vi.贡献出,捐赠',
      word4: 'paragraph',
      meaning4: 'n.段落,分段符号',
      word5: 'generate',
      meaning5: 'vt.形成，造成'
    })
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
  onUnload: function () {
  
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