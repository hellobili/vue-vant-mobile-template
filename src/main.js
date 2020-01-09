import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 路由跳转
import '@/permission'

// 样式重置
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/theme.styl'

// vant引入
import Vant from 'vant'
import 'vant/lib/index.css'

// 适配
import 'amfe-flexible'

// 移动端延迟点击处理
import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
