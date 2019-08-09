<template>
  <el-container>
    <el-header>
      <el-steps :active="active" align-center>
        <el-step title="Step 1" description="Upload your image" icon="el-icon-upload"></el-step>
        <el-step title="Step 2" description="Set some parameters" icon="el-icon-edit"></el-step>
        <el-step
          title="Step 3"
          description="Download your awesome wallpaper"
          icon="el-icon-picture"
        ></el-step>
      </el-steps>
    </el-header>
    <el-main>
    </el-main>
    <el-footer>
      <el-row type="flex" justify="center">
        <el-col :span="4">
          <el-button :disabled="noBack" @click="back">Back</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="next">{{this.active<3?'Next':'Download'}}</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      noBack: true
    };
  },

  methods: {
    next() {
      this.active++;
      this.noBack = false;
      if (this.active == 4) {
        this.active = 3;
      }
    },
    back() {
      this.active--;
      if (this.active == 0) this.noBack = true;
    }
  }
};
</script>