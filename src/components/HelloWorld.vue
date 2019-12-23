<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <span v-bind:title="message">
            content
        </span>
        <p :class="{pClass: isActiveClass}">
            {{message}}
        </p>
        <input v-model.number="inputValue"/>
        {{inputValue}}
        <p v-bind="childControlFather">
            用来测试 - 子组件控制父组件
        </p>
        <!--缓存组件状态-避免重复渲染组件带来的性能问题-->
        <keep-alive>
            <a-component parameter="112" v-bind:param2="213" param3="12312321"></a-component>
            <common-component parameter="123"></common-component>
        </keep-alive>
    </div>
</template>

<script>
    import AComponent from './AComponent.vue'
    import CommonComponent from './CommonComponent.vue'


    //在模块系统中局部注册一个组件
    export default {
        name: 'HelloWorld',
        components: {CommonComponent, AComponent},
        data: () => {           //在组件中，data不是对象，而是一个函数
            return {            //在组件中，data函数需要返回一个对象
                count: 0
            }
        },
        props: {                //通过 Prop 向子组件传递数据
            msg: String,
            id: String,
            message: String,
            childControlFather: String,
            isActiveClass: Boolean,
            inputValue: String
        },
        comments: {
            AComponent,
            CommonComponent
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .pClass {
        color: #000;
    }
</style>
