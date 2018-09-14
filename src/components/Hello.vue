<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Test from '@/services/test'

export default {
  name: 'HelloWorld',
  created() {
    Test.getTestMsg().then(res => {
      if(res.result === 1) {
        this.msg = res.msg
      }
    })
  },
  data () {
    return {
      msg: 'waiting for response',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
