
export default [
  {
    path: '/entry',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/entry/input',
        component: './infomation',
      },
      {
        path: '/entry/result',
        component: './result',
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/orders',
          },
          {
            path: '/orders',
            name: '交易记录',
            icon: 'SnippetsOutlined',
            component: './orders',
          },
          {
            path: '/refund',
            name: '退款记录',
            icon: 'SnippetsOutlined',
            component: './refund',
          },
          {
            path: '/registration',
            name: '商户注册记录',
            icon: 'SnippetsOutlined',
            component: './registration',
          },
          {
            path: '/goods',
            name: '商品管理',
            icon: 'SnippetsOutlined',
            component: './goods',
          },
          {
            path: '/points',
            name: '积分记录',
            icon: 'SnippetsOutlined',
            component: './points',
          },
          {
            path: '/pointWriteOff',
            name: '积分核销记录',
            icon: 'SnippetsOutlined',
            component: './pointWriteOff',
          },
          {
            path: '/exchange',
            name: '积分兑换情况',
            icon: 'SnippetsOutlined',
            component: './exchange',
          },
          {
            path: '/invoice',
            name: '发票记录',
            icon: 'SnippetsOutlined',
            component: './invoice',
          },
          {
            path: '/equipment',
            name: '设备信息',
            icon: 'SnippetsOutlined',
            component: './equipment',
          },
          {
            path: '/postMessage',
            name: '邮寄信息',
            icon: 'SnippetsOutlined',
            component: './postMessage',
          },
        ]
      },

      {
        component: './404',
      },
    ]
  },
  {
    component: './404',
  },
];
