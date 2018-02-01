<template>
  <canvas id="canvas" width="500px" height="500px"></canvas>
</template>
<script>
export default {
    name :"Canvas",
    components:{

    },
    mounted:function(){
        this.getCanvas()
    },
    methods:{
       getCanvas : function(event){
                var canvas = document.getElementById("canvas")
                var ctx = canvas.getContext("2d")
                ctx.fillStyle = "black";//填充色
                // ctx.beginPath()
                // ctx.arc(75,75,50,0,Math.PI*2,true)
                // ctx.moveTo(110,75)
                // ctx.arc(75,75,35,0,Math.PI,false)
                // ctx.moveTo(65,65);
                // ctx.arc(60,65,5,0,Math.PI*2,true)
                // ctx.moveTo(95,65);
                // ctx.arc(90,65,5,0,Math.PI*2,true)
                // ctx.stroke()        
                // ctx.beginPath()
                // ctx.moveTo(10,10)
                // ctx.lineTo(10,100)
                // ctx.lineTo(100,10)
                // ctx.fillStyle = "#ff6100"
                // ctx.fill()
                ctx.beginPath()
                ctx.moveTo(75,25)
                ctx.quadraticCurveTo(25,25,25,62.5)
                ctx,quadraticCurveTo(25,100,50,100)
                ctx,quadraticCurveTo(50,120,30,125)
                ctx.quadraticCurveTo(60,120,65,100)
                ctx.quadraticCurveTo(125,100,125,62.5)
                ctx.quadraticCurveTo(125,25,75,25)
                ctx.stroke()
        }
    }
}
</script>
<style>

</style>

