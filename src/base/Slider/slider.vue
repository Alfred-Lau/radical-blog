<template>
  <div class="slider">
    <ul class="slider-items">
      <li v-for="img in imgList" :key="img.id" class="slider-item">
        <img class="slider-item-img" :src='getImgUrl(img.id)' :alt="img.title" srcset="">
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'Slider',
  methods: {
    getImgUrl (id: number): string {
      return require(`../../assets/imgs/${id}.jpg`)
    }
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
          }, {
            id: 5,
            title: 'ds'
          }]
      }
    }
  }
}
</script>

<style lang='scss' scoped>

.slider{
  text-align: center;

  // height: 260px;
  background: #eef;

  &-items{
  }

  &-item {
    display: inline-block;
    width: 100%;

    &-img{
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
