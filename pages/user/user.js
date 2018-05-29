
Page({
  data: {
    tabList: [{
      id: '1',
      title: '全部评论'
    }, {
      id: '2',
      title: '已回复'
    }],
    selectedTabId: '1',
  },
  onLoad: function () {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#F9D173',
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
})
