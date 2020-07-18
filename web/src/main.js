import Vue from 'vue'
import App from './App.vue'


import "./assets/iconfont/iconfont.css"
import "./assets/scss/style.scss";
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'


// If you use Swiper 6.0.0 or higher
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

import Card from "./components/Card.vue"

Vue.component('m-card',Card)

import ListCard from "./components/ListCard.vue"
Vue.component('m-list-card',ListCard)




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
