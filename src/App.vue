<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

 
}
*{
    margin: 0;
    padding: 0;
    font-size: 14px;
}
ul li , ol li{
    list-style: none;
}
a{
    text-decoration: none;
}
  
</style>
