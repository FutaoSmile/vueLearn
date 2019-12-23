<template>
    <div>
        ComponentA, parameter value is {{parameter}}
    </div>
</template>

<script>
    export default {
        name: "AComponent",
        props: {
            parameter: {
                required: true,
                type: String
            },
            param2: {
                required: true,
                type: [Number, Boolean]
            },
            param3: {
                required: true,
                //自定义验证
                validator: function (value) {
                    return value.trim().length > 5
                }
            }
        }
    }
</script>

<style scoped>

</style>
