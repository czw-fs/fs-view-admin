<template>
    <div>
        login success
        <el-button @click.native.prevent="handleLogin">sdfsf</el-button>
    </div>
</template>

<script>
export default {


    methods:{
        handleLogin(){
          //发送登录请求，并将信息放到全局总线上
          this.$store.dispatch("GetInfo").then((res) => {


          }).catch((err) => {
            console.log(err)
          });
        }
    }
}
</script>

<style lang="scss" scoped>


</style>