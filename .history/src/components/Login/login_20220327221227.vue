<!--  -->
<template>
  <div class="container">
    <div class="login">
      <form action="">
        <div class="username" id="username">
          <label
            for="username"
            class="float-label"
            :class="{ active: isNameActive }"
            >邮箱/手机号/小米ID</label
          >
          <input type="text" @focus="changeNameStyle" @blur="changeNameStyle" />
        </div>
        <div class="password" id="password">
          <label
            for="password"
            class="float-label"
            :class="{ active: isPasswordActive }"
            >密码</label
          >
          <input
            type="password"
            @focus="changePasswordStyle"
            @blur="changePasswordStyle"
          />
        </div>
        <div class="checkbox">
          <input type="checkbox" />
          <span>已阅读并同意小米账号 用户协议和隐私政策</span>
        </div>
      </form>
      <button type="submit" class="submit">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isNameActive: false,
      isPasswordActive: false,
    };
  },
  computed: {},
  watch: {},
  //方法集合
  methods: {
    changeNameStyle() {
      this.isNameActive = !this.isNameActive;
    },
    changePasswordStyle() {
      this.isPasswordActive = !this.isPasswordActive;
    },
  },
};
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.container {
  padding-top: 20px;
  text-align: center;
  .login {
    margin: 0 auto;
    min-width: 450px;
    .username,
    .password {
      position: relative;
      min-width: 200px;
      margin: 0 auto;
      input {
        height: 60px;
        min-width: 200px;
        outline: none;
        padding: 30px 20px 10px;
        box-sizing: border-box;
        border: none;
      }
      input:focus {
        outline: 1px solid #ff7e29;
      }
      .float-label {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 17px;
        color: rgba(0, 0, 0, 0.4);
        transition: all 0.15s;
      }
      .active {
        top: 6px;
        font-size: 6px;
        color: #aaa;
      }
    }
    .password {
      margin-top: 20px;
    }
    .checkbox {
      margin: 20px 0;
      font-size: 14px;
      color: #aaa;
      input {
        background-color: #ff7e29;
      }
    }
    .submit {
      min-width: 354px;
      height: 60px;
      background-color: #ff7e29;
      border: none;
      font-size: 18px;
      color: white;
      font-weight: 400;
      border-radius: 5px;
    }
  }
}
</style>