// bookItem.js
//获取应用实例
const app = getApp()
Page({
  data: {
    settingDisplay:'none',
    barDisplay: 'none',
    title: "治疗思乡病的偏方",
    text: "从越南芽庄开始，一路寻觅到柬埔寨的金边，我们转遍了大大小小的电器店，最早想买电磁炉，可是又大又沉，后来又看上了电热杯，可是又薄又小，又容易糊锅，只适合烧水和下方便面，最后盯上了电饭锅，又可以煮饭，又可以熬粥，还可以炖菜煲汤，简直是万能的啊！（虽然在家里，只用它煮过饭，从来没思考过它的其他功能）可是一直都没有找到特别合适的电饭锅，要满足质量好，体积小，重量轻，价格适中。直到在金边混乱的苏利亚商城，看到了一个特别可爱，叫价二十五美金的电饭锅。我们看着锅身上蚯蚓一样的外星文字，问这是哪儿产的，他说泰国产的，不是中国产的，那个是中国产的，便宜，质量没这个好！然后我俩顾不得身为中国人而受伤的小心灵，当场一拍即合：“那我们就去泰国买吧！”说得就好像泰国是隔壁商铺的名字，",
    book_id: 1,
    initFontSize:'14',
    colorArr:[{
      value:'#f7eee5',
      name:'米白',
      font:''
    },{
      value:'#e9dfc7',
      name:'纸张',
      font:'',
      id:'font_normal'
    }]
  },
  viewSetting:function(){
    this.setData({
      settingDisplay:'block'
    })
  },
  hideSetting: function () {
    this.setData({
      settingDisplay: 'none'
    })
  },
  switchBar:function(){
    if (this.data.barDisplay=='none'){
      this.setData({
        barDisplay: 'display'
      })
    }else{
      this.setData({
        barDisplay: 'none'
      })
    }
  },
  viewNextPage: function () {
    console.log('hah');
    this.setData({
      text: '而我的脑子里呈现着这样的画面：泰国满大街都是各种各样的迷你电饭锅在走路，就连天上飘的都是！晚上回去一寻思，以前也去过泰国，没注意到什么电饭锅，而且还要一两个月才能到达泰国，这漫长的没有锅的日子要我怎么度过啊，我现在可是病得不轻！小刀果断地做了决定，明天就去买！第二天我们屁颠屁颠地跑去，那家电器行换了个看店的大叔，完全不会英语，于是我们张牙舞爪，愉快地交流了半天，在各种驴唇不对马嘴地讨论之后，紧张地测试了电饭锅的性能，紧接着，又是一阵用计算器敲打地讨价还价，最终以二十美元的价格成交，双方都是喜笑颜开。拿着新买的电饭锅，我觉得浑身充满了力量，用小刀的话是：“生活又有了盼头。”'
    })
  },
  //监听页面加载
  onLoad: function () {
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
    var that = this;
    //获取字号
    wx.getStorage({
      key:'initFontSize',
      success:function(res){
        that.setData({
          initFontSize:res.data
        })
      }
    })
    //获取背景色
    wx.getStorage({
      key: 'bodyColor',
      success: function (res) {
        that.setData({
          bodyColor: res.data
        })
      }
    })
    //数据接口
    wx.request({
      url:'http://www.baidu.com/book/bookItem',
      data:{
        "bookId":"1",
        "chapterId":"2",
      }
    })
  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title: '治疗思乡病的偏方',
    })
  },
})


  
