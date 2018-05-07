const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/main.vue'], resolve),
      children: [
        {
            path: '/table',
          name: '表格',
          component: (resolve) => require(['./views/table.vue'], resolve),
          hidden: true,
          meta: {
            keepAlive: false,
            requireAuth: true
          }
        }
      ]
}];
export default routers;