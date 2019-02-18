Page({

  data: {

    swiperCurrent: 0,

    indicatorDots: true,

    autoplay: true,

    interval: 3000,

    duration: 800,

    circular: true,
// banner轮播图片
    imgUrls: [

      '../images/index/banner1.jpg',

      '../images/index/banner2.jpg',

      '../images/index/banner3.jpg'

    ],

    links: [

      '../user/user',

      '../user/user',

      '../user/user'

    ],
    // 商品详情页
    hotgoods: [
      {
        "name": "宫廷珍珠莎两件套",
        "pic_url": "../images/index/goods1.jpg"
      },
      {
        "name": "重工银丝金口外套",
        "pic_url": "../images/index/goods2.jpg",
      },
      {
        "name": "羊毛打底",
        "pic_url": "../images/index/goods3.jpg"
      },
      {
        "name": "毛衣背心",
        "pic_url": "../images/index/goods4.jpg",
      },
      {
        "name": "棉衣",
        "pic_url": "../images/index/goods5.jpg"
      },
      {
        "name": "棉衣",
        "pic_url": "../images/index/goods6.jpg"
      }
    ]
    


  },
  //轮播图的切换事件

  swiperChange: function(e) {

    this.setData({

      swiperCurrent: e.detail.current

    })

  },

  //点击指示点切换

  chuangEvent: function(e) {

    this.setData({

      swiperCurrent: e.currentTarget.id

    })

  },

  //点击图片触发事件

  swipclick: function(e) {

    console.log(this.data.swiperCurrent);

    // wx.switchTab({

    //   url: this.data.links[this.data.swiperCurrent]

    // })
    var pages = getCurrentPages()    //获取加载的页面

    var currentPage = pages[pages.length - 1]    //获取当前页面的对象
    var pathName = window.document.location.pathname;
    var url = pathName    //当前页面url
    console.log(url);

  }
  //
})