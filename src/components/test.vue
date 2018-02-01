<template>
  <div>
      <div>{{api}}</div>
      <div>{{this.removeapi()}}</div>  
      <div v-bind:class="{active: isActive}">{{class1}}</div>
      <h2 v-if="ok">yes</h2>
      <h2 v-else>no</h2>
      <h3 v-if="ok1">yes</h3>
      <h2 v-else>no</h2>
    <button @click="this.fjs">切换</button>
  </div>
  
</template>
<script>
export default {
    name : "test",
    components:{

    },
    data () {
        return{
            api :"123123",
            class1:"",
            isActive :false,
            ok : true,
            ok1 : false,
        }
    },
    computed : {
        
    },
    methods :{
        removeapi : function () {
                    return this.api.split("").reverse().join("")
                },
        fjs :function(){
            this.class1 += "kongkong";
            if(this.isActive){
                this.isActive = false
            }else{
               this.isActive = true 
            }
            if(this.ok){
                this.ok = false
            }else{
               this.ok = true 
            }
             if(this.ok1){
                this.ok1 = false
            }else{
               this.ok1 = true 
            }
        }
    }
    



}


</script>
<style>
.active{
    color: blue;
}


</style>
