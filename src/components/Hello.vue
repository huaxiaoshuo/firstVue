<template>
  <div class="hello">
    <headFoot></headFoot>
  </div>
</template>

<script>
import headFoot from "../common/headFoot";
// import  electron from "electron";

export default {
  name: 'hello',
  components:{
    headFoot
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2:"hello word"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
