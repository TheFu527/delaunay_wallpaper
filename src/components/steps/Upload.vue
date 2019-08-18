<template>
  <div>
    <el-row type="flex" justify="center">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="#"
        list-type="picture"
        accept="image/jpeg, image/png"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        :limit="1"
        :on-exceed="handleExceed"
        :on-change="loadUrlFromFileConfirmed"
      >
        <el-button slot="trigger" size="small" type="primary">Select</el-button>
        <div slot="tip" class="el-upload__tip">Only support jpg/png</div>
      </el-upload>
    </el-row>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      fileList: []
    };
  },
  methods: {
    handleRemove(file) {
      // console.log(file);
    },
    handlePreview(file) {
      // console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      this.$message.warning(`Limit to select 1 file.`);
    },
    loadUrlFromFileConfirmed(file) {
      // console.log(file.url);
      this.$emit("getData", file, 1);
    }
  }
};
</script>