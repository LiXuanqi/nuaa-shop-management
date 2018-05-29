Component({
    properties: {
      // 这里定义了innerText属性，属性值可以在组件使用时指定
      innerText: {
        type: String,
        value: 'default value',
      }
    },
    data: {
      appName: "南航店铺管理系统"
    },
    methods: {
      // 这里是一个自定义方法
      customMethod: function(){}
    }
  })