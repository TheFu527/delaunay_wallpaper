<template>
  <div>
    <el-container>
      <el-header height="150px">
        <el-row type="flex" class="row-bg" justify="center">
          <el-steps :active="active" align-center>
            <el-step title="Step 1" description="Upload your image" icon="el-icon-upload"></el-step>
            <el-step title="Step 2" description="Set some parameters" icon="el-icon-edit"></el-step>
            <el-step
              title="Step 3"
              description="Download your awesome wallpaper"
              icon="el-icon-picture"
            ></el-step>
          </el-steps>
        </el-row>
      </el-header>
      <el-main>
        <component v-bind:is="currentStep" v-on:getData="getData" v-bind:image="image"></component>
      </el-main>
      <el-footer>
        <el-row type="flex" justify="center">
          <el-button :disabled="noBack" @click="back">Back</el-button>
          <el-col :span="4" type="flex" justify="center"></el-col>
          <el-button type="primary" @click="next">{{this.active<2?'Next':'Download'}}</el-button>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import step1 from "@/components/steps/Upload";
import step2 from "@/components/steps/Options";
import step3 from "@/components/steps/View";

export default {
  name: "Steps",
  components: {
    step1: step1,
    step2: step2,
    step3: step3
  },
  data() {
    return {
      active: 0,
      noBack: true,
      step1: "step1",
      step2: "step2",
      step3: "step3",
      currentStep: "step1",
      image: "",
      pointsNum: ""
    };
  },

  methods: {
    next() {
      this.active++;
      this.noBack = false;
      if (this.active == 4) {
        this.active = 3;
      }
      console.log("this.image");
      console.log(this.image);
      console.log(this.pointsNum);
      this.goWhere();
    },
    back() {
      this.active--;
      if (this.active == 2) this.active = 1;
      if (this.active == 0) this.noBack = true;
      this.goWhere();
    },
    goWhere() {
      if (this.active == 0) {
        this.currentStep = step1;
      } else if (this.active == 1) {
        this.currentStep = step2;
      } else if (this.active == 2) {
        this.currentStep = step3;
      } else if (this.active == 3) {
        this.currentStep = step3;
      }
    },
    getData(data, step) {
      console.log(data);
      console.log(step);
      if (step == 1) {
        var reader = new FileReader();
        reader.readAsDataURL(data.raw);
        reader.onload = () => {
          this.image = reader.result;
        }
        
        console.log("image.result");
        console.log(this.image);
        
      } else if (step == 2) {
        this.pointsNum = data;
      }
    },
  }
};
</script>