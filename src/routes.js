import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./App.vue')
    },
    {
        path: '/hello',
        component: require('./components/HelloWorld.vue')
    }
];

export default new VueRouter({routes});
