<template>
  <div class="box">
    <img :src="imgUrl" alt="">
    <hello></hello>
  </div>
</template>

<script>
import Hello from '@/components/Hello'
import image from '@/modules/assets/demo.jpeg'

export default {
  name: 'Demo',
  components: {
    Hello,
  },
  data() {
    return {
      imgUrl: image,
    }
  }
}
</script>

<style lang="less" scoped>
  .box {
    margin: 20px;
    text-align: center;
    img {
      width: 200px;
    }
  }
</style>


