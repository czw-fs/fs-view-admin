<template>
    <div class="layout">

        <div class="menu">
            <Nav></Nav>
        </div>  

        <div class="content">
            <Content></Content>
        </div>

    </div>
</template>
<script>
import Content from "./Content.vue";
import Nav from "./Nav.vue";
export default {
    data() {
        return {
        }
    },
    components: {
        Content, 
        Nav
    }
}
</script>
<style lang = "less" scoped>
.layout{
    display: flex;



    .content{
        padding-left: 200px;
    }
}


</style>