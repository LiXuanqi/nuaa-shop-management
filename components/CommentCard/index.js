Component({
    properties: {
      // 这里定义了innerText属性，属性值可以在组件使用时指定
      username: {
        type: String,
        value: "匿名用户"
      },
      date: {
        type: String
      },
      mark: {
        type: Number
      },
      comment: {
        type: String
      },
      ownerReply: {
        type: String
      },
      ownerReplyTime: {
        type: Number
      },
      adminReply: {
        type: String
      },
      adminReplyTime: {
        type: Number
      }
    },
    data: {
   
    },
    methods: {
      // 这里是一个自定义方法
  
    }
  })