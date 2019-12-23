<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App hhha "
                    id="hello currentId is xxx"
                    message="is message"
                    v-bind:is-active-class="true"/>
        <!--路由页面将显示在这里-->
        <!-- 3.设置路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <header-component/>
        <router-view/>
        <footer-component/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import HeaderComponent from './components/layout/HeaderComponent.vue'
    import FooterComponent from './components/layout/FooterComponent.vue'

    export default {
        name: 'app',
        data: function () {
            return {
                count: 0
            }
        },
        components: {
            HelloWorld,
            HeaderComponent,
            FooterComponent

        },
        props: {
            env: process.env.ENV_NAME,
            nodeEnv: process.env.NODE_ENV
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
