<template>
  <div>
    <span class="demonstration">Your wallpaper</span>
    <el-image :src="image">
      <div slot="placeholder" class="image-slot">
        Loading
        <span class="dot">...</span>
      </div>
    </el-image>
  </div>
</template>

<script>
export default {
  props: ['image'],
  data() {
    return {
      imageData: []
    };
  }
};
</script>