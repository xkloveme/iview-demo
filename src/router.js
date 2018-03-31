const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},
{
    path: '/watch',
    meta: {
        title: '观察者'
    },
    component: (resolve) => require(['./views/watch.vue'], resolve)
}];
export default routers;