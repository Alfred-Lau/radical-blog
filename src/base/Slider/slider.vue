<template>
  <div class="container">
    <div class="swiper-box">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in swiperData" :key="item.id">
            <a href=""
              ><img :src="`/imgs/3.webp`" alt=""
            /></a>
          </swiper-slide>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>

          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

import 'swiper/css/swiper.css';

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        /* basic */
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadow: false
        },
        /* 分页 */
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        /* 前进后退 */
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperData: [
        {
          id: 1,
          link: ''
        },
        {
          id: 2,
          link: ''
        }, {
          id: 3,
          link: ''
        }, {
          id: 4,
          link: ''
        }, {
          id: 5,
          link: ''
        }
      ]
    };
  },
  methods: {
  },
  props: {
    imgList: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            title: 'bgcolor'
          },
          {
            id: 2,
            title: 'bgcolor'
          },
          {
            id: 3,
            title: 'bgcolor'
          },
          {
            id: 4,
            title: 'ds'
          },
          {
            id: 5,
            title: 'ds'
          }
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    margin: auto;
    width: 1000px;
    height: 500px;
    overflow: hidden;

    // @include middle();
    .swiper-box {
      position: relative;
      width: 100%;
      img {
        width: 100%;
      }

      .swiper-button-prev,
      .swiper-button-next {
        transform: translateY(-95px);
      }
    }

  }
</style>
