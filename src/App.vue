<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App hhha "
                    id="hello currentId is xxx"
                    message="is message"
                    v-bind:is-active-class="true"/>
        <!--<div>-->
        <!--<table border="1" align="center">-->
        <!--<tr>-->
        <!--<td>{{env}}</td>-->
        <!--<td>{{nodeEnv}}</td>-->
        <!--<td>123</td>-->
        <!--<td>123</td>-->
        <!--<td>123</td>-->
        <!--<td>123</td>-->
        <!--</tr>-->
        <!--</table>-->
        <!--</div>-->
        <hello-world msg="Welcome to Your Vue.js App hhha "
                     id="hello currentId is xxx"
                     message="is message"
                     v-bind:is-active-class="true"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        data: function () {
            return {
                count: 0
            }
        },
        components: {
            HelloWorld
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
