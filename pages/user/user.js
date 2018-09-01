import moment from '../../utils/moment';
moment.locale('zh-cn');
const app = getApp();
Page({
  data: {
    username: '',
    avatarUrl: '',
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
    console.log(app.globalData.userInfo)
    this.setData({
      username: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
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
    let code = ""
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://nuaashop.yuwenjie.cc/?service=App.Shop.GetUserComment',
          method: 'POST',
          data: {
            session: res.code
          },
          success: ({ data }) => {
            let formatedData = data['data'].map((item) => {
              console.log(moment.unix(parseInt(item.adminReplyStatus)).startOf('day').fromNow())
              return {
                ...item,
                date: item.date.split(" ")[0],
                adminReplyStatus: moment.unix(parseInt(item.adminReplyStatus)).startOf('day').fromNow(), // calculate interval of days.
                ownerReplyStatus: moment.unix(parseInt(item.ownerReplyStatus)).startOf('day').fromNow(),
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

    
  }
})
