<template>
  <div class="store">
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


  </div>
</template>

<script>
export default {
  name: 'store'
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
.title {
  height: 80px;
  font-size: 25px;
  line-height: 80px;
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
</style>