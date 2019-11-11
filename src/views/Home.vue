<template>
  <div class="home">
    
    <div class="site-nav">
      <div class="nav-content container">
        <div class="nav-left">
          <ul>
            <li><router-link to="/login">登录</router-link></li>
            <li><router-link to="/register">免费注册</router-link></li>
          </ul>
        </div>
        <div class="nav-right">
          <ul>
            <li>加入收藏</li>
            <li>论坛</li>
            <li style="color: red;">咨询热线：400-811-0779</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="header-wrap">
      <div class="header container">
        <div class="logo">
          <img src="../../static/images/logo.png" alt="享乐居">
        </div>
        <div class="nav-menu">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="#000"
            active-text-color="#ffd04b"
            style="width: 100%; display: flex; justify-content: space-around;">
            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">享乐居</template>
              <el-menu-item index="2-1">申报维修</el-menu-item>
              <el-menu-item index="2-2">更换配件</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">装修公司</el-menu-item>
            <el-submenu index="4">
              <template slot="title">设计师</template>
              <el-menu-item index="4-1">设计工作室</el-menu-item>
              <el-menu-item index="4-2">设计师</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">装修工人</template>
              <el-menu-item index="5-1">小工</el-menu-item>
              <el-menu-item index="5-2">木工</el-menu-item>
              <el-menu-item index="5-3">水电工</el-menu-item>
              <el-menu-item index="5-4">电焊工</el-menu-item>
              <el-menu-item index="5-5">泥瓦工</el-menu-item>
              <el-menu-item index="5-6">油漆工</el-menu-item>
              <el-menu-item index="5-7">工程总监</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">材料商城</el-menu-item>
            <el-menu-item index="7">装修日记</el-menu-item>
            <el-submenu index="8">
              <template slot="title">更多</template>
              <el-menu-item index="8-1">全屋定制</el-menu-item>
              <el-menu-item index="8-2">智能家居</el-menu-item>
              <el-menu-item index="8-3">厨房设施</el-menu-item>
              <el-menu-item index="8-4">家具</el-menu-item>
              <el-menu-item index="8-5">家饰</el-menu-item>
              <el-menu-item index="8-6">装饰线条</el-menu-item>
              <el-menu-item index="8-7">脚手架</el-menu-item>
              <el-menu-item index="8-8">铲车/钩机/吊机</el-menu-item>
              <el-menu-item index="8-9">园林绿化</el-menu-item>
              <el-menu-item index="8-10">阳光房/雨棚</el-menu-item>
              <el-menu-item index="8-11">结构改造</el-menu-item>
              <el-menu-item index="8-12">瓷砖加工</el-menu-item>
              <el-menu-item index="8-13">空调维修</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="header-right">
          <div class="login">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="register">注册</el-button>
          </div>
          <div class="search">
            <el-input
              placeholder="请输入内容"
              v-model="input">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-wrap">
      <div class="swiper">
        <el-carousel trigger="click" height="600px">
          <el-carousel-item v-for="item in swiperImgs" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="module1">
      <div class="module1-inner container">
      </div>
    </div>

    <div class="module2">
    </div>

    <div class="module3">
    </div>

    <div class="module4">
    </div>

    <div class="module5">

    </div>

    <div class="footer">
      <div class="footer-content container">
        <div class="footer-left">
          <div class="telephone">
            <p style="font-size: 25px;"><i class="el-icon-phone"></i>24小时服务热线</p>
            <p style="font-size: 20px; margin-top: 5px;">0779-3201668</p>
          </div>
          <div class="address" style="margin-top: 15px;">
            <p style="font-size: 20px; color: #a8a8a8;"><i class="el-icon-location"></i>公司地址</p>
            <p  style="font-size: 14px; color: #a8a8a8; margin-top: 5px;">北海市国家高新技术产业开发区</p>
            <p  style="font-size: 14px; color: #a8a8a8; margin-top: 5px;">高端服务业聚集区四楼</p>
          </div>
        </div>
        <div class="footer-middle">
          <div class="list">
            <ul class="list1">
              <li>新手指南</li>
              <li>服务内容</li>
              <li>申报流程</li>
              <li>用户手册</li>
            </ul>
            <ul class="list2">
              <li>支付方式</li>
              <li>在线支付</li>
              <li>微信支付</li>
              <li>充值帐号</li>
            </ul>
            <ul class="list3">
              <li>售后服务</li>
              <li>更换配件</li>
              <li>紧急处理</li>
              <li>联系客服</li>
            </ul>
          </div>
        </div>
        <div class="footer-right">
          <div class="usImg" style="margin: 30px;">
            <div style="font-size: 18px;">关注我们</div>
            <img src="https://aimg8.dlssyht.cn/u/1885686/module/simplepicbackground/1885686/7274/14547632_1564372549.jpg?x-oss-process=image/resize,m_fixed,w_111,h_111,limit_0" alt="享乐居二维码" style="margin-top: 10px;">
            <p style="display: block; font-size: 14px; color: #a8a8a8;">扫码关注公众号</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import bgImg1 from '../../static/images/bgImg1.jpg'
export default {
  name: 'home',
  data () {
    return {
      input: '',
      value: '',
      activeIndex: '1',
      swiperImgs: [
        require('../../static/images/s001.png'),
        require('../../static/images/s002.png'),
        require('../../static/images/s003.png'),
        require('../../static/images/s004.png'),
        require('../../static/images/s005.png')],
      bgImgs1: bgImg1,
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 1400px;
  height: 100%;
  padding: 0 20px;
  display: flex;
  margin: auto;
}

.site-nav {
  height: 30px;
  background-color: #e6e6e6;
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      color: #808080;
      li {
        margin: 0 20px;
        a {
          &:link, &:hover, &:active, &:visited {
            text-decoration: none;
            color: #808080;
          }
        }
      }
    }
  }
}

.header-wrap {
  height: 150px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-right {
      height: 70%;
      .login {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
      }
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.module1 {
  height: 800px;
}

.module2{
  width: 100%;
  height: 640px;
  background: url('../../static/images/bgImg2.jpg');
  background-attachment:fixed;
  filter: blur(1px);
}

.module3{
  width: 100%;
  height: 1080px;
  background: url('../../static/images/bgImg3.jpg');
  background-attachment:fixed;
  filter: blur(1px);
}

.module4{
  width: 100%;
  height: 1080px;
  background: url('../../static/images/bgImg4.jpg');
  background-attachment:fixed;
  filter: blur(1px);
}

.module5 {
  width: 100%;
  height: 1080px;
  background: url('../../static/images/bgImg5.jpg');
  filter: blur(5px);
}

.footer {
  background-color: #30343e;
  height: 250px;
  padding-bottom: 20px;
  .footer-content {
    color: #fff;
    .footer-left {
      width: 20%;
      padding: 45px 0 0 30px;
    }
    .footer-middle {
      width: 55%;
      .list {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        .list1, .list2, .list3 {
          li {
            list-style: none;
            margin: 16px;
            font-size: 14px;
            color: #a8a8a8;
            &:first-child {
              font-size: 18px;
              color: #fff;
            }
          }
        }
      }
    }
    .footer-right {
      width: 25%;
      text-align: center;
    }
  }
}
</style>
