<template>
    <div>
        <el-container>
            <el-aside width="200px" class="menu">
                <Menu></Menu>
            </el-aside>

            <el-container>

                <el-header class="myheader">
                    <Header></Header>
                </el-header>

                <el-main class="main">
                    <router-view></router-view>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
import Menu from './menu.vue'
import Header from './header.vue'
export default {
    components:{
        Menu,
        Header
    }
}
</script>

<style lang="less" scoped>
.myheader{
    padding: 0;
    // background-color: pink;
    height: 50px !important; 
}
.main{
    padding: 0;
    position: fixed;
    left: 201px;
    top: 50px;
    overflow: visible;
    width: 100%;
    height: 100%;
}

.menu{
    background-color: #888;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
}
</style>