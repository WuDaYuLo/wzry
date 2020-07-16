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
  </div>
</template>

<script>

export default {
  data(){
    return {
      swiperOptions:{
        pagination: {
          el: '.pagination-home',
         //循环
          loop:true,
          //每张播放时长3秒，自动播放
          autoplay:2000,
          //滑动速度
          speed:1000,
          // delay:1000
        },
      }
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
</style>
