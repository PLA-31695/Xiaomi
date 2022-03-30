<!--  -->
<template>
  <div class="service">
    <div class="service-left">
    </div>
    <div class="service-right">
      <serveHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import serveHeader from "@/components/Header/serve-header.vue";
import Login from "@/components/Login/login.vue";
export default {
  components: {
    serveHeader,
    Login,
  },
  data() {
    return {
      Width: document.body.clientWidth, // 屏幕宽
      Height: document.body.clientHeight, // 屏幕高
      isShow:true,
    };
  },
  computed: {
      
  },
  watch: {
    Width(val){
        if(val < 1000){
            this.isShow = false
        }else{
            this.isShow = true
        }
    }
  },
  //方法集合
  methods: {},
  created() {},
  mounted() {
      window.onresize = () =>{
          console.log(this)
          this.Width = document.body.clientWidth
      }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.service {
  .service-left {
    float: left;
    width:30%;
    height: 500px;
    background-image: url("../../assets/images/service.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .service-right {
    width: 50%;
  }
}
</style>