<template>
   <header class="header">
        <div class="site-topbar">
            <div class="container">
                <div class="topbar-left">
                    <ul> 
                        <li>小米商城</li>
                        <li>MIUI</li>
                        <li>IoT</li>
                        <li>云服务</li>
                        <li>天星数科</li>
                        <li>有品</li>
                        <li>小爱开放平台</li>
                        <li>企业团购</li>
                        <li>资质证照</li>
                        <li>协议规则</li>
                        <li>下载app</li>
                        <li>智能生活</li>
                        <li>Select Location</li>
                    </ul>
                </div>
               <div class="topbar-right">
                   <a href="">
                    <div class="topbar-cart">
                        购物车( 0 )
                    </div>
                   </a>
                   <!-- <div class="cart-menu">
                    购物车中还没有商品，赶紧选购吧！
                   </div> -->
                   <div class="topbar-usrInfo">
                    <ul>
                        <li>登录</li>
                        <li>注册</li>
                        <li>消息通知</li>
                    </ul>
                </div>
               </div>
            </div>
            
        </div>
        <div class="site-header">
            <div class="container">
                <div class="header-logo">
                    <a href="index.html">小米官网</a>
                </div>
                <div class="header-nav">
                    <ul>
                        <li class="nav-category">
                            <div class="site-category">
                                <ul>
                                    <li>手机</li>
                                    <li>电视</li>
                                    <li>笔记本 平板</li>
                                    <li>家电</li>
                                    <li>出行 穿戴</li>
                                    <li>智能 路由器</li>
                                    <li>电源 配件</li>
                                    <li>健康 儿童</li>
                                    <li>耳机 音响</li>
                                    <li>生活 箱包</li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">Xiaomi手机</li>
                        <li class="nav-item">Redmi手机</li>
                        <li class="nav-item">电视</li>
                        <li class="nav-item">笔记本</li>
                        <li class="nav-item">平板</li>
                        <li class="nav-item">家电</li>
                        <li class="nav-item">路由器</li>
                        <li class="nav-item">服务</li>
                        <li class="nav-item">社区</li>
                    </ul>
                </div>
                <div class="header-search">
                    <input type="search" placeholder="耳机" class="search-text">
                    <input type="submit" class="search-btn" value="&#xe651;">
                </div>
            </div>
        </div>
   </header>
</template>

<script>
export default {
    name:'my-header'
}
</script>

<style lang="less">
    .site-topbar{
        height: 40px;
        background-color: #333;
        color:#b0b0b0;
        font-size:12px;
        line-height: 40px;
        .topbar-left{
            ul li {
                float: left;
                display: inline-block;  
            }
            ul li ::after{
                content: "|";
                display: inline-block;
            }
        }
        .topbar-right{
            float: right;
        }
    }
</style>