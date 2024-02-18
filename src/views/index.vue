<template>
    <div>
        login success
        <br>
        <div>获取ip</div>
        <el-button @click.native.prevent="alogout">logout</el-button>
        <div>{{ ip }}</div>
    </div>
</template>

<script>

import { getIp } from "@/api/getIp"
import { Avatar } from "element-ui";
import { logout } from "@/api/login"
export default {
    name: "Myindex",
    data() {
        return {
            ip: '',
        }
    },

    methods: {
        alogout() {
            this.$store.dispatch("LogOut").then((res) => {
                this.$message({
                    message: '退出登录成功！！！',
                    type: 'success'
                });
                location.href = "/"
            })

            // logout("aaa").then(res => {
            //     console.log("hello")
            // })
            // getIp().then(res => {
            //     console.log(res)
            //     this.ip = res.data
            // })
            
        }
    }
}
</script>

<style lang="scss" scoped></style>