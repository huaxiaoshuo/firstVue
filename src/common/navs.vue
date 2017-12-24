<template>
  <nav>
         <ul>
        <!--<li id="jianzhengfangquan"><a class="jzfq" href="http://www.jlzwfw.gov.cn/jl/content.jsp">简证放权</a></li>-->
        <li id="yidong"><a href="http://td.thewallet.com.cn"><i class="icon iconfont icon-33"></i>移动app</a></li>
        <li class="active"><a
                @click="clickLigin('http://tgov.thewallet.com.cn/eWallet/auth/zwuser?redirectUrl=/userCenter/')"><i
                class="icon iconfont icon-yonghuzhongxin"></i>用戶中心</a>
        </li>
        <!--<a href="/jld/sonsulting.html"></a>-->
        <li id="zixun"><a @click="clickLigin('http://tgov.thewallet.com.cn/tisp/consulting')"><i
                class="icon iconfont icon-zixun"></i>我要咨询</a>
        </li>
        <li id="tousu"><a @click="clickLigin('http://tgov.thewallet.com.cn/tisp/complaining')"><i
                class="icon iconfont icon-zixun--"></i>我要投诉</a>
        </li>
        <li id="jiucuo"><a @click="clickLigin('http://tgov.thewallet.com.cn/tisp/correction')"><i
                class="icon iconfont icon-renzheng"></i>我要纠错</a></li>
    </ul>
    <p @click="toTop()" id="turntop" class="navup"><i class="icon iconfont icon-xiangshangjiantouarrowup"></i></p>
  </nav>
 
</template>

<script>
export default {
  name: 'Navs',
  data () {
    return {
    
    }
  },
  methods:{

  }
}
</script>

<style scoped>
    nav{
        position: fixed;
        right: 0px;
        top: 18%;
    }
    nav ul{

    }
     nav ul li{
    width: 100%;
    height: 64px;
    background: #ff6200;
    margin-bottom: 5px;
    text-align: center;
    padding: 0px 5px;
     }
      nav ul li a{
    color: white;
    font-size: 12px;
    text-align: center;
      }
       nav ul li a i{
    font-size: 28px;
    display: block;
    text-align: center;
    padding: 0 5px;
       }
     nav .navup{
       width: 100%;
    height: 44px;
    color: white;
    font-size: 35px;
    text-align: center;
    margin-bottom: 3px;
       }

       nav .navup{
    position: relative;
    top: -10px;
    font-size: 25px;
       }   



</style>
