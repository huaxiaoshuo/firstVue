<template>
  <div class="header">
      <div class="imgBox">
          <img src="" alt="">
      </div>

            <ul class="rightF">
                <li><a href="/">首页</a></li>
                <li><a href="http://www.jlcity.gov.cn/" target="_blank">市政府</a></li>
                <li><a href="http://www.jlcity.gov.cn/sz/" target="_blank">市长</a></li>
                <li><a href="http://www.jlcity.gov.cn/zw/" target="_blank">政务</a></li>
                <li><a class="active"  href="/">服务</a></li>
                <li><a href="http://www.jlcity.gov.cn/hd/" target="_blank">互动</a></li>
                <li><a href="http://www.jlcity.gov.cn/sq/" target="_blank">市情</a></li>
                <li><a href="http://www.jlcity.gov.cn/sj/" target="_blank">数据</a></li>
            </ul>

  </div>

</template>

<script>
export default {
  name: 'HeaDers',
  data () {
    return {
      msg: '总在盼望总在失望p',
      msg2:"总在盼望总在失望日子还不都这样",
      msg3:"快写一首情歌雅芳共赏"

    }
  }
}
</script>

<style scoped>
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
.header{
    height: 60px;
    line-height: 60px;
    background: #f8f8f8;
    border-bottom: 1px #ff6100 solid;
    overflow: hidden;
}
.rightF{
    float: right;
    height: 60px;
    line-height: 60px;
    padding-right: 20px;

}
.imgBox{
    float: left;
}
.rightF li{
    display: inline-block;

}
.rightF li a{
    padding: 0 20px;
    font-size: 16px;
    color: #666;
}
.rightF li a.active{
    color: #ff6200;
}
.rightF li a:hover{
    color: #ff6200;
}



</style>
