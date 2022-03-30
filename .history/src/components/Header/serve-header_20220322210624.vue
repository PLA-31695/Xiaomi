<!--  -->
<template>
  <div class="serve-header">
    <div class="logo-left">
      <img src="@/assets/images/logo-mi2.png" />
      <span>小米账号</span>
    </div>
    <div class="header-right">
      <ul>
        <li><a href="#">用户协议</a></li>
        <li><a href="#">隐私政策</a></li>
        <li><a href="#">帮助中心</a></li>
        <li>中文（简体）</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {},
  created() {},
  mounted() {},
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
    .serve-header{
        .logo-left{
            float: left;
            img{
                width: 40px;
            }
            span{
                font-weight: 500;
                font-size: 26px;
                color: #333;
            }

        }
    }
</style>