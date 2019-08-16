<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <div class="block">
          <span class="demonstration">How many points do you want?</span>
          <el-slider v-model="pointsNum" :min="3" :max="1000" show-input @change="returnPointsNum"></el-slider>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      pointsNum:500
    };
  },
  methods: {
    returnPointsNum(pointsNum) {
      this.$emit('getData', pointsNum, 2);
    }
  }
};
</script>