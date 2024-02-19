<template>
    <div class="header">
        <el-button type="primary" @click.native.prevent="index">index</el-button>
        <el-button type="primary" @click.native.prevent="logout">logout</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch("LogOut").then((res) => {
                this.$message({
                    message: '退出登录成功！！！',
                    type: 'success'
                });
                location.href = "/"
            })
        },
        index(){
            this.$router.push("/")
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    position: relative;
    left: 201px;
    top: 0;
    background-color: skyblue;
    width: 100%;
    height: 100%;
}
</style>