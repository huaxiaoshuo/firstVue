<template>
 <div class="headFoot">
     <HeaDers></HeaDers>
    <navs></Navs>

 </div>


</template>

<script>
import HeaDers from "./HeaDers";
import Navs from "./Navs";

export default {
  name: 'headFoot',
  components:{
    HeaDers,
    Navs,
  
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2:"hello word"
    }
  }
}
</script>

<style>
.headFoot{
    width: 100%;
}

</style>
