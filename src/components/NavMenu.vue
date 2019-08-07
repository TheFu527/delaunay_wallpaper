<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      unique-opened
      router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-picture"></i>
            <span>Try It</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class="el-icon-caret-right"></i>
              Start Here
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>About</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <i class="el-icon-reading"></i>
              Knowledge
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-user"></i>
              Github
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="el-icon-download"></i>
              Download
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>