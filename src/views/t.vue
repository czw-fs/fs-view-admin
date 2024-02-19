<template>
    <div>
        login success
        <br>
        <el-button @click.native.prevent="logout">logout</el-button>
        <br>
        <el-button @click.native.prevent="getIp">获取ip</el-button>
        <div>{{ ip }}</div>
    </div>

    <!-- <div>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div> -->
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
        logout() {
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

        },
        getIp() {
            getIp().then(res => {
                // console.log(res)
                this.ip = res.data
            })
        }
    }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>