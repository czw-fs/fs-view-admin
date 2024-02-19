<template>
    <div>
        <Header></Header>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue"
export default {
    components: {
        Header,
    }
}
</script>

<style lang="less" scoped>

.content{
    position: relative;
    top:50px;
}


</style>