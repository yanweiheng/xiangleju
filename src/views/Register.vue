<template>
  <div class="register" :style="contentStyleObj">

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

    <div class="registerModule">
      <div class="registerBox container animated fadeInDown">
        <div class="registerForm" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
          <h1 style="font-size: 20px; margin-top: 40px;">会员注册</h1>
          <div class="register-message" style="margin-top: 20px; width: 100%;">
            <h4>用户名：</h4>
            <el-input prefix-icon="iconfont icon-yonghuming" v-model="username" placeholder="请输入用户名"></el-input>
            <h4>密码：</h4>
            <el-input prefix-icon="iconfont icon-mima" v-model="passwordOne" placeholder="请输入密码" type="password"></el-input>
            <h4>确认密码：</h4>
            <el-input prefix-icon="iconfont icon-mima" v-model="passwordTwo" placeholder="确认" type="password"></el-input>
            <h4>联系电话：</h4>
            <el-input prefix-icon="iconfont icon-mima" v-model="telephone" placeholder="请输入手机号"></el-input>
            <div class="submit">
              <el-button type="primary" style="width: -webkit-fill-available; margin: 20px 0 0 0;" @click="register">免费注册</el-button>
            </div>
          </div>
        </div >
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      contentStyleObj:{
　　　　 height:''
  　　},
      username: '',
      passwordOne: '',
      passwordTwo: '',
      telephone: ''
    }
  },
  methods:{
    getHeight () {
      this.contentStyleObj.height=window.innerHeight + 'px';
    },
    register () {
      this.$router.push('/register')
    }
  },

  created () {
    window.addEventListener('resize', this.getHeight);
    this.getHeight()
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

.register {
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
  .registerBox {
    margin: 72px auto;
    height: 530px;
    width: 330px;
    background-color: #fff;
    .register-message h4 {
      margin: 10px 0;
    }
  }
}




</style>