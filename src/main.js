import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;


//添加插件
// Vue.use(plugin)


new Vue({
    // el: "",     //设置vue的挂载点，挂载在某个DOM元素上
    render: h => h(App),
    computed: {
        //计算属性，会被缓存，（虽然也可以通过function来实现，但是通过计算属性得的值是可以被缓存的)
        age: function () {
            return 1;
        }
    }
}).$mount('#app');
