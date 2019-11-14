import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import animated from 'animate.css'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/iconfont.css'

Vue.use(ElementUI)
Vue.use(animated)

Vue.prototype.$ajax= axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
