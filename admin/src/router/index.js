import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue';
import CategoryList from '../views/CategoryList.vue';

import ItemEdit from '../views/ItemEdit.vue';
import ItemList from '../views/ItemList.vue';
import HeroEdit from '../views/HeroEdit.vue';
import HeroList from '../views/HeroList.vue';
import ArticleEdit from '../views/ArticleEdit.vue';
import ArticleList from '../views/ArticleList.vue';
import AdEdit from '../views/AdEdit.vue';
import AdList from '../views/AdList.vue';
import AdminUserEdit from '../views/AdminUserEdit.vue';
import  AdminUserList from '../views/AdminUserList.vue';

import Login from '../views/Login.vue'

// 解决ElementUI导航栏重复点菜单报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

  const routes = [
  {
    path:'/login',name:"login",component:Login,meta:{ isPublic:true }
  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      { path:'/categories/create',component: CategoryEdit },
      { path:'/categories/edit/:id',component: CategoryEdit,props:true }, // props 把参数注入到页面里
      { path:'/categories/list',component: CategoryList },


      { path:'/items/create',component: ItemEdit },
      { path:'/items/edit/:id',component: ItemEdit,props:true }, // props 把参数注入到页面里
      { path:'/items/list',component: ItemList },

      { path:'/heroes/create',component: HeroEdit },
      { path:'/heroes/edit/:id',component: HeroEdit,props:true }, // props 把参数注入到页面里
      { path:'/heroes/list',component: HeroList },

      { path:'/articles/create',component: ArticleEdit },
      { path:'/articles/edit/:id',component: ArticleEdit,props:true }, // props 把参数注入到页面里
      { path:'/articles/list',component: ArticleList },
      
      { path:'/ads/create',component: AdEdit },
      { path:'/ads/edit/:id',component: AdEdit,props:true }, // props 把参数注入到页面里
      { path:'/ads/list',component: AdList },

      { path:'/admin_users/create',component: AdminUserEdit },
      { path:'/admin_users/edit/:id',component: AdminUserEdit,props:true }, // props 把参数注入到页面里
      { path:'/admin_users/list',component: AdminUserList },
    ]
  },
 
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.meta)
  if(!to.meta.isPublic && !localStorage.token){
    return next("/login")
    // console.log("need login")
  }
  next()
})

export default router
