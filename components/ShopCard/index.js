Component({
    properties: {
      // 这里定义了innerText属性，属性值可以在组件使用时指定
      sid: {
        type: Number
      },
      name: {
        type: String,
        value: '店铺名',
      },
      intro: {
        type: String,
        value: "店铺介绍"
      },
      tel: {
        type: String,
        value: "店铺电话"
      },
      pic: {
        type: String,
        value: ""
      },
      meanMark: {
        type: Number
      }
    },
    data: {
      // 这里是一些组件内部数据
      someData: {}
    },
    methods: {
      // 这里是一个自定义方法
      customMethod: function(){}
    }
  })