Component({
    properties: {
 
    },
    data: {
      appName: "南航店铺管理系统"
    },
    methods: {
      navigateToSearchPage: function() {
        wx.navigateTo({
          url: '/pages/search/search'
        })
      }
    
    }
  })