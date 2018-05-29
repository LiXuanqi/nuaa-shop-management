
Page({
    data: {
      sid: -1,
      name:"教育超市",
      intro:"介绍咯，当然是要长，嚯嚯嚯耶耶耶，吼吼吼吼吼，大大大，会不会两行，换换,呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿",
      tel: "15651672345",
      category: "生活",
      position: "樱花广场",
      workTime: "09:00 ~ 23:59",
      tabList: [{
        id: '1',
        title: '商家'
      }, {
        id: '2',
        title: '评价'
      }],
      selectedTabId: '1',
    },
    onLoad: function (query) {
      this.setData({
        sid: query.id
      })
      //fetch data from api.
      wx.setNavigationBarTitle({
        title: this.data.name
      })
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#333333',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
       }
      })
    },
    handleTabChanged: function (e) {
      const id = e.detail;
      this.setData({
        selectedTabId: id
      });
    },
    handleButtonClicked: function() {
      wx.navigateTo({
        url: '/pages/form/form?sid=' + this.data.sid
      })
    }
  })
  