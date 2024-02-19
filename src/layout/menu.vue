<template>
    <div class="menu">
        <el-row class="tac">
        <el-col :span="35" >
            <el-menu default-active="2" class="el-menu-vertical-demo" style="color: black; width: 200px;">

                <el-submenu index="1">

                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Navigator One</span>
                    </template>

                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item one</el-menu-item>

                </el-submenu>

                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span>Navigator Four</span>
                </el-menu-item>
                
            </el-menu>
        </el-col>
    </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>



</style>