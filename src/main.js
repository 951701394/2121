import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/index.css"
// 引入axios 模块
import axios from "axios"

axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.common['Authorization'] = localStorage.getItem("token")  // 请求前把token带到服务器
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

Vue.prototype.http =axios
Vue.use(ElementUI);  // 安装elemenyt ui



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
