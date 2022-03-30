<!--  -->
<template>
  <div class="service">
    <div
      class="service-left"
      v-if="isShow"
      :style="{ height: Height + 'px' }"
    ></div>
    <div class="service-right">
      <serveHeader />
      <div class="service-right-box">
        <div class="box-nav">
          <div class="box-nav-tab">
           <a href="#"> 登录</a>
            </div>
          <div class="box-nav-tab">
            <a href="#">注册</a>
          </div>
        </div>
        <router-view></router-view>
      </div>
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
      isShow: true,
    };
  },
  computed: {},
  watch: {
    Width(val) {
      if (val < 1000) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
  //方法集合
  methods: {},
  created() {},
  mounted() {
    window.onresize = () => {
      this.Width = document.body.clientWidth;
    };
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
  width: 100%;
  .service-left {
    position: relative;
    float: left;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30%;
    background-image: url("../../assets/images/service.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .service-right {
    float: left;
    width: 70%;
    .service-right-box {
      width: 360px;
      margin:0 auto;
      padding-top:20px;
      .box-nav {
        height: 40px;
        .box-nav-tab {
          display: inline-block;
          font-weight:500;
          font-size: 22px;
          margin-left: 20px;
        }
        .box-nav-tab :hover{
          color:#ff7e29;
          padding-bottom:10px;
          border-bottom:1px solid #ff7e29
        }
      }
    }
  }
}
</style>