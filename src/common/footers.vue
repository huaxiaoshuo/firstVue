<template>

<section class="footer">
    <img src="images/logo_bottom.png" class="arc-img"/>
    <span class="copyright">Copyright ©2016 吉林市人民政府</span>

</section>

</template>

<script>
export default {
  name: 'Footers',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2:"hello word"
    }
  }
}
</script>

<style>
.footer{
    clear: both;
    width: 100%;
    margin: auto;
    background-color: #f8f8f8;
    height: 78px;
    position: relative;
    bottom: 0px;
}
.footer img{
    height: 50px;
    margin-top: 3px;
    padding: 0px 4%;
}
.footer .copyright{
    height: 78px;
    line-height: 78px;
}


</style>
