<template>
  <div class="nav">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>Navigator Two</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang = "less" scoped>
.nav {
  width: 200px;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
</style>