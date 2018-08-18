const app = getApp();

Page({
    data: {
      sid: null,
      pic: ''
    },
    onLoad: function (query) {
      this.setData({
        sid: query.sid,
        pic: query.pic
      });
      console.log(query.sid);
      console.log(app.globalData.userInfo)
    },
    formSubmit: function(e) {
      const nickName = app.globalData.userInfo.nickName;
      const code = app.globalData.code;
      // console.log('form发生了submit事件，携带数据为：', e.detail.value);
      const formData = e.detail.value;
      const meanMark = (formData['envMark'] + formData['serviceMark'] + formData['qualityMark']) / 3
      const formatedData = {
        ...formData,
        meanMark: parseInt(meanMark.toFixed(1)),
        sid: this.data.sid,
        session: code,
        username: nickName,
      }
      console.log(formatedData)
      wx.request({
        url: `https://nuaashop.yuwenjie.cc/?service=App.Shop.AddComment`,
        method: 'POST',
        data: formatedData,
        success: ({ data }) => {
          if (data.ret == 200) {
            wx.navigateTo({
              url: `/pages/shop/shop?id=${this.data.sid}`
            })
          }
        }
      })
    },
  })
  