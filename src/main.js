//模块部分
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from "vue-router";
import routes from "./router/index.js";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from "vuex";
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import YDUI from 'vue-ydui';
import ElementUI from 'element-ui';

//js部分
import {post,fetch,patch,put} from './assets/js/http'
import common from './assets/js/common_fun.js'
import * as custom from "./assets/js/common_filter.js"
import instruct from './assets/js/common_int.js'
import cache from './assets/js/cache.js'
import api  from './assets/js/api.js'

//css部分
import './assets/scss/common.scss'
// import 'swiper/dist/css/swiper.css';
import './assets/css/reset.css'
import "./assets/css/swiper.min.css";
import 'vue-ydui/dist/ydui.px.css'
import 'element-ui/lib/theme-chalk/index.css';
//定义全局变量
Vue.config.productionTip = false
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$api = api;
Vue.prototype.common = common;
Vue.prototype.cache = cache;
//Vue use部分
Vue.use(instruct)
Vue.use(Vuex)
Vue.use(YDUI)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Object.keys(custom).forEach(key => {
	Vue.filter(key, custom[key])
})

const router = new VueRouter({
  routes,
})
router.beforeEach((to,from,next)=>{
	  if (to.matched.length === 0) { //匹配前往的路由不存在
    from.name ? next({
      name: from.name
    }) : next('/404'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
  } else if(to.meta.title){
		document.title = to.meta.title
	}
	next()
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
