<template>
  <div class="login">
    <div class="login-form">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <!-- 标题 -->
        <h3 class="title">fs-admin</h3>

        <!-- 用户名 -->
        <el-form-item prop="username" class="username">
          <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
          </el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码"
            @keyup.enter.native="handleLogin">
          </el-input>
        </el-form-item>

        <el-form-item style="width:100%;">
          <!-- 登录 -->
          <el-button :loading="loading" size="medium" type="primary" style="width:100%;"
            @click.native.prevent="handleLogin">
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script>
// import {  } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "admin123",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的用户名" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ]
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: false,
      redirect: undefined

    };
  },
  created() {

  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        this.loading = false;
        if (valid) {
          console.log("success")
        }
      });
    }
  }
};
</script>
  
<style rel="stylesheet/scss" lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
  background-image: url("../assets/images/login-background.jpg");
  background-size: cover;
}
.title{
  text-align: center;
  padding-bottom: 10px;
}
.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  height: 200px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

</style>
  