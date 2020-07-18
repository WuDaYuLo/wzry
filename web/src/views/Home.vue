<template>
  <div>
    <swiper :options="swiperOptions" id="parent">
        <swiper-slide>
          <img class="w-100" src="../assets/images/banner.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/images/banner02.jpeg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="w-100" src="../assets/images/banner03.jpeg" alt="">
        </swiper-slide>
        <div class="swiper-pagination pagination-home text-right px-3 pb-1" 
        slot="pagination"></div>
    </swiper>

    <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆破站</div>
        </div>
      </div>

      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-2"></i>
        <span>收起</span>
      </div>
    </div>

    <!-- end of nav icons -->

    <!-- <m-card icon="menu1" title="新闻资讯">

      <div class="card-body pt-3">
          <div class="nav jc-between">
            <div class="nav-item active">
              <div class="nav-link">热门</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">新闻</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">公告</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">活动</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">赛事</div>
            </div>
          </div>

          <div class="pt-3">
            <swiper>
            <swiper-slide v-for="m in 5" :key="m">
              <div class="py-2" v-for="n in 5" :key="n">
                <span>新闻</span>
                <span>7月17日体验服停机更新公告</span>
                <span class="time">07/17</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

    </m-card> -->
    
    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
          <div class="py-2"  v-for="(item,i) in category.newLists" :key="i">
            <span>[{{item.categories}}]</span>
            <span>{{item.title}}</span>
            <span class="time">{{item.date}}</span>
          </div>
      </template>
      
    </m-list-card>

    

    <m-card icon="card-hero" title="英雄列表"> </m-card>
    <m-card icon="menu1" title="精彩视频"></m-card>
    <m-card icon="menu1" title="图文攻略"></m-card>
    <m-card icon="menu1" title="英雄列表"></m-card>
    



  </div>
</template>

<script>

export default {
  data(){
    return {
      swiperOptions:{
        pagination: {
          el: '.pagination-home',
        },
        //循环
        loop:true,
        //每张播放时长3秒，自动播放
        autoplay:2000,
        //滑动速度
        // speed:1000,
        // delay:1000
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        },

        newsCats:[
          {
            name:"热门",
            newLists:new Array(5).fill(1).map(() =>({
                categories:"热门",
                title:"7月17日体验服停机更新公告",
                date:"07/18"
              }))

          },
          {
            name:"新闻",
            newLists:new Array(5).fill(1).map(() =>({
                categories:"新闻",
                title:"7月17日体验服停机更新公告",
                date:"07/18"
              }))

          },
          {
            name:"公告",
            newLists:new Array(5).fill(1).map(() =>({
                categories:"公告",
                title:"7月17日体验服停机更新公告",
                date:"07/18"
              }))

          },
          {
            name:"活动",
            newLists:new Array(5).fill(1).map(() =>({
                categories:"活动",
                title:"7月17日体验服停机更新公告",
                date:"07/18"
              }))

          },
          {
            name:"赛事",
            newLists:new Array(5).fill(1).map(() =>({
                categories:"赛事",
                title:"7月17日体验服停机更新公告",
                date:"07/18"
              }))

          },
        ],
    }
  }  
}
</script>


<style lang="scss">

@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background-color: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
        background: map-get($colors, 'info' )
    }
  }
  
}

.nav-icons{
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n){
      border-right: none;
    }
  }
}
</style>
