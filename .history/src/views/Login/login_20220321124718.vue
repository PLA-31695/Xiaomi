<!--  -->
<template>
  <div class="login">
    <form action="">
      <div class="username" id="username">
        <label for="username" class="float-label">邮箱/手机号/小米ID</label>
        <input type="text" />
      </div>
      <div class="password" id="password">
        <label for="password" class="float-label">密码</label>
        <input type="password" placeholder="密码" />
      </div>
      <div class="checkbox">
        <input type="checkbox" />已阅读并同意小米账号 用户协议和隐私政策
      </div>
    </form>
    <button type="submit">登录</button>
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
.login {
    .username{
        position: relative;
        input{
            height: 60px;
            min-width: 354px;
            outline: none;
            padding: 30px 20px 10px;
            box-sizing: border-box;
            // border:none
        }
        .float-label{
            position: absolute;
            top:20px;   
            left:20px;
            font-size: 17px;
            color: rgba(0,0,0,.4);
            transition: top;
        }
        .float-label:hover{
            top: 6px;
            font-size: 6px;
            color:#aaa;
        }
    }
}
</style>