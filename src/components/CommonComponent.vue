<template>
    <div>
        CommonComponent, parameter is {{parameter}}
    </div>
</template>

<script>
    export default {
        name: "CommonComponent",
        props: {
            parameter: String
        }
    }
</script>

<style scoped>

</style>
