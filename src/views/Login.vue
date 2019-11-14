<template>
  <div class="login" :style="contentStyleObj">
    <div class="header">
      <div class="header-content container">
        <div class="logo">
          <img src="https://aimg8.dlssyht.cn/u/1885686/module/simplepicbackground/1885686/7293/14585082_1564535940.png?x-oss-process=image/resize,m_fixed,w_133,h_139,limit_0" alt="享乐居logo" style="height: 80px;">
          <img src="../../static/images/logo2.png" style="width: 190px;">
        </div>
        <div class="backHome">
          <router-link to="/"><span style="color: #fff;">返回主页</span></router-link>
        </div>
      </div>
    </div>

    <div class="loginModule">
      <div class="loginBox container animated fadeInDown">
        <div class="loginForm" style="display: flex; flex-direction: column; align-items: center;">
          <h1 style="font-size: 20px; margin-top: 40px;">会员登录</h1>
          <div class="login-message" style="margin-top: 40px;">
            <el-input prefix-icon="iconfont icon-yonghuming" v-model="username" placeholder="请输入用户名"></el-input>
            <el-input prefix-icon="iconfont icon-mima" v-model="password" placeholder="请输入密码" type="password"></el-input>
            <div class="submit">
              <el-button type="primary" style="width: -webkit-fill-available; margin-top: 20px;">登录</el-button>
              <el-button type="info" style="width: -webkit-fill-available; margin: 20px 0 0 0;" @click="register">免费注册</el-button>
            </div>
          </div>
          <div class="line-left-right">其他登录</div>
          <div class="other-login">
            <a href="#"><img src="../../static/images/weixin.png" alt="微信登陆"></a>
          </div>
        </div >
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      contentStyleObj:{
　　　　 height: ''
  　　},
      username: "",
      password: "",
  　}
  },
  methods:{
    getHeight () {
      this.contentStyleObj.height=window.innerHeight + 'px';
    },
    register () {
      this.$router.push('/register')
    },
    getInfo () {
      this.$ajax.get('../../mock/login.json')
            .then(res => {
              console.log(res.data)
            })
            .catch(err => {
              console.log(err)
            })
    }
  },

  created () {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
    this.getInfo()
  },

  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  height: 100%;
  padding: 0 20px;
  display: flex;
  margin: auto;
}

.login {
  background-image: url('../../static/images/loginImg.jpg');
  background-repeat: no-repeat;
  min-height: 969px;
  .header {
    height: 80px;
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-content img {
        height: 70px;
        width: 70px;
      }
      a {
        &:link, &:hover, &:active, &:visited {
          text-decoration: none;
          color: #808080;
        }
      }
    }
  }
  .loginBox {
    margin: 72px auto;
    height: 480px;
    width: 330px;
    background-color: #fff;
    .el-input {
      margin-bottom: 28px;
    }
    .line-left-right {
      padding: 0;
      margin: 30px 0px;
      line-height: 1px;
      border-left: 130px solid #999;
      border-right: 130px solid #999;
      text-align: center;
      height: 1px;
      color: #999;
    }
  }
}

</style>