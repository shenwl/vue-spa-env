<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eee;
}
a {
  text-decoration: none;
  color: #444;
}
ul, li{
  list-style: none;
}
.btn {
  color: #666;
  font-size: 12px;
  padding: 2px 4px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px #ccc;
  border: none;
  cursor: pointer;
  display: inline-block;
}
#app {
  display: flex;
  align-items: stretch;
}
</style>
