<!--  -->
<template>
<div class='service'>
    <div class="service-left">

    </div>
    <div class="service-right">
        <serveHeader/>
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import serveHeader from '@/components/Header/serve-header.vue'
import Login from '@/components/Login/login.vue'
export default {
components: {
    serveHeader,
    Login
},
data() {
return {

};
},
computed: {},
watch: {},
//方法集合
methods: {

},
created() {

},
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.service{
    display: flex;
    justify-content: space-between;
     .service-left{
         width: 50%;
         height: 500px;
        background-image: url('../../assets/images/service.jpg');
        background-size: 50%;

    }
    .service-right{
        width: 50%;
    }
}
   
</style>