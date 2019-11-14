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
            active-text-color="#ffd04b">
            <el-menu-item index="/"><h4>首页</h4></el-menu-item>
            <el-menu-item index="/store"><h4>配件商城</h4></el-menu-item>
            <el-menu-item index="3"><h4>维修服务</h4></el-menu-item>
            <el-menu-item index="4"><h4>检修服务</h4></el-menu-item>
            <el-menu-item index="5"><h4>会员中心</h4></el-menu-item>
          </el-menu>
        </div>
        <div class="header-right">
          <div class="search">
            <el-input
              placeholder="请输入内容"
              v-model="input">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <div class="login">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="register">注册</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="line-left-right-box">
      <div class="line-left-right container"></div>
    </div>

    <div class="page-content-wrap">
      <div class="shop-content">
        <div class="shop-nav container">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>配件</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="shop-radio container">
          <span style="margin-right: 10px;">享乐居：</span>
          <div>
            <el-radio-group v-model="radio" >
              <el-radio-button label="全部"></el-radio-button>
              <el-radio-button label="享乐居"></el-radio-button>
              <el-radio-button label="配件"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="shop-filter container">
          <div class="filter-button">
            <el-button size="mini">时间</el-button>
            <el-button size="mini">关注度</el-button>
            <el-button size="mini">价格升序<i class="el-icon-sort-up"/></el-button>
            <el-button size="mini">价格降序<i class="el-icon-sort-down"/></el-button>
          </div>
          <div class="filter-input">
            <el-input v-model="price1" size="mini" class="input-txt" prefix-icon="iconfont icon-renminbi1688"></el-input>
            <span style="margin: 0 5px;">-</span>
            <el-input v-model="price2" size="mini" class="input-txt" prefix-icon="iconfont icon-renminbi1688"></el-input>
            <el-button size="mini">确认</el-button>
          </div>
          <div class="filter-select">
            <el-select v-model="value" clearable placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="shop-list container">
          <el-row>
            <el-col :span="4" v-for="o in 30" :key="o">
              <div
                @mouseenter="addBorderStyle($event)"
                @mouseleave="removeBorderStyle($event)">
                <el-card
                  :body-style="{ padding: '10px' }">
                  <img src="https://aimg8.dlssyht.cn/u/1885686/module/simplepicbackground/1885686/7293/14585082_1564535940.png?x-oss-process=image/resize,m_fixed,w_133,h_139,limit_0" class="image">
                  <div class="shop-detail" style="padding: 14px;">
                    <p class="shop-price" style="color: red; font-size: 20px; margin-bottom: 8px;">￥50/次</p>
                    <p class="shop-title">享乐居 单次上门维修服务</p>
                    <div class="shop-status">
                      <p>累计销量<span>0</span>笔</p>
                      <p>评论<span>0</span></p>
                    </div>
                  </div>
                </el-card>
              </div>
              
            </el-col>
          </el-row>
        </div>
        <div class="shop-pagination container">
          <el-pagination
            background
            layout="prev, pager, next, jumper"
            :total="50">
          </el-pagination>
        </div>
      </div>
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
export default {
  name: 'store',
  data () {
    return {
      input: '',
      activeIndex: '/store',
      radio: '配件',
      options: [{
        value: '选项1',
        label: '推荐'
      }, {
        value: '选项2',
        label: '促销'
      }, {
        value: '选项3',
        label: '新品'
      }, {
        value: '选项4',
        label: '热门'
      }, {
        value: '选项5',
        label: '特价'
      }, {
        value: '选项6',
        label: '独家'
      }],
      value: '',
      price1: '',
      price2: '',
      isActive: false
    }
  },
  methods: {
    handleSelect (path) {
      this.$router.push(path)
    },
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    },
    addBorderStyle ($event) {
      $event.currentTarget.className = 'active'
    },
    removeBorderStyle ($event) {
      $event.currentTarget.className = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  margin: -3px;
  border: 3px solid red;
}
.store {
  min-height: 969px;
  position: relative;
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
      .nav-menu {
        .el-menu-demo {
          width: 100%;
          display: flex;
          justify-content: space-around;
          .el-menu-item {
            font-size: 20px;
            margin: 0 25px;
          }
        }
      }
      .header-right {
        height: 70%;
        .login {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
      }
    }
  }

  .line-left-right-box {
    display: flex;
    justify-content: center;
    .line-left-right {
      border-bottom: 1px solid #409eff;
      height: 2px;
      margin-left: 2px;
      margin-right: 2px;
    }
  }

  .page-content-wrap {
    padding-top: 20px;
    padding-bottom: 100px;
    .shop-content {
      .shop-nav {
        margin: 10px auto;
        padding-left: 50px;
      }
      .shop-radio {
        margin: 25px auto 10px;
        align-items: center;
      }
      .shop-filter {
        justify-content: space-between;
        height: 38px;
        align-items: center;
        padding-left: 8px;
        border-top: 1px solid #E7E3E7;
        border-bottom: 1px solid #E7E3E7;
        background-color: #f1f1f1;
        margin-bottom: 10px;
        .filter-button {
          height: 28px;
          button {
            margin: 0 2px;
          }
        }
        .filter-input {
          display: flex;
          align-items: center;
          margin-left: -600px;
          .input-txt {
            width: 80px;
          }
          button {
            margin: 0 5px;
          }
        }
        .filter-select {
          width: 100px;
        }
      }
      .shop-list {
        padding: 0;
        width: 1440px;
        .el-col-4 {
          margin: 10px;
          width: 18.6%;
          .el-card {
            position: relative;
            height: 400px;
            .bottom {
              margin-top: 13px;
              line-height: 12px;
            }
            .image {
              width: 100%;
              display: block;
            }
            .shop-detail {
              .shop-status {
                position: absolute;
                bottom: 8px;
                width: 220px;
                font-size: 14px;
                color: #999;
                display: flex;
                justify-content: space-between;
                span {
                  color: #b57c5b;
                }
              }
            }
          }
        }
      }
      .shop-pagination {
        margin-top: 20px;
        justify-content: flex-end;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: -270px;
    background-color: #30343e;
    width: 100%;
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
}
</style>