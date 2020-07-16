import Vue from 'vue'
import App from './App.vue'

import "./style.scss";
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'


// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css';
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
