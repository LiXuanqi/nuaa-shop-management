import moment from '../../utils/moment';

const app = getApp();

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
    comments: [],
    replyComments: []
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
    this.getUserComments();
  },
  handleTabChanged: function (e) {
    const id = e.detail;
    this.setData({
      selectedTabId: id
    });
  },
  getUserComments: function () {
    wx.request({
      url: 'https://nuaashop.yuwenjie.cc/?service=App.Shop.GetUserComment',
      method: 'POST',
      data: {
        session: app.globalData.code
      },
      success: ({ data }) => {
        let formatedData = data['data'].map((item) => {
          return {
            ...item,
            date: item.date.split(" ")[0],
            adminReplyStatus: moment(parseInt(item.adminReplyStatus)).startOf('day').fromNow().split(" ")[0], // calculate interval of days.
            ownerReplyStatus: moment(parseInt(item.ownerReplyStatus)).startOf('day').fromNow().split(" ")[0],
          }
        }) 
        console.log(formatedData)
        this.setData({
          comments: formatedData
        })
        const replyComments = formatedData.filter((item) => {
          if (item.adminReply || item.ownerReply) {
            return true;
          } else {
            return false;
          }
        });

        this.setData({
          replyComments: replyComments
        })
      }
    })
  }
})
