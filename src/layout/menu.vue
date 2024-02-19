<template>
    <div class="menu">
        <el-row class="tac">
            <el-col :span="35">
                <el-menu default-active="2" class="el-menu-vertical-demo" style="color: black; width: 200px;">

                    <el-submenu index="1">

                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Navigator One</span>
                        </template>

                        <router-link to="/index1" class="link">
                            <el-menu-item index="1-1">1</el-menu-item>
                        </router-link>

                        <el-menu-item index="1-2" @click="showindex3">2</el-menu-item>


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


    methods: {
        showindex3() {
            this.$router.push("/index2")
        }
    }
}
</script>

<style lang="scss" scoped>
.link {
    text-decoration: none;
    /* 去掉下划线 */
}
</style>