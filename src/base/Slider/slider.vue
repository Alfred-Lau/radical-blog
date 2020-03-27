<template>
  <div class="slider">
    <ul class="slider-items">
      <li v-for="img in imgList" :key="img.id" class="slider-item">
        <img class="slider-item-img" :src="img.src" :alt="img.title" srcset="">
      </li>
    </ul>
  </div>
</template>

<script lang='typescript'>
export default {
  name: 'Slider',
  props: {
    imgList: {
      type: Array,
      default () {
        return [
          {
            id: 1,
            title: 'bgcolor',
            src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/andrey-grinkevich-rIDE73mqi2s-unsplash.jpg?Expires=1585224730&OSSAccessKeyId=TMP.3KjgmrSmva2PdsYyNkw3Titx7XTftaWrS9xru1g9ALpwaTEFzpUH5hhLgbqBKyuoA4JCTe9uB9DGg92MaAqiXY21fvA5a3&Signature=D%2Bo9tGOhlkvLbcapf7%2Bzim1eq9w%3D'
          },
          {
            id: 2,
            title: 'bgcolor',
            src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/chris-henry-GFk0Q-Dehj4-unsplash.jpg?Expires=1585224759&OSSAccessKeyId=TMP.3KjgmrSmva2PdsYyNkw3Titx7XTftaWrS9xru1g9ALpwaTEFzpUH5hhLgbqBKyuoA4JCTe9uB9DGg92MaAqiXY21fvA5a3&Signature=njIdfMOHJZx3sPfca7C4AKRBBVk%3D'
          },
          {
            id: 3,
            title: 'bgcolor',
            src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/daniela-cuevas-t7YycgAoVSw-unsplash.jpg?Expires=1585224768&OSSAccessKeyId=TMP.3KjgmrSmva2PdsYyNkw3Titx7XTftaWrS9xru1g9ALpwaTEFzpUH5hhLgbqBKyuoA4JCTe9uB9DGg92MaAqiXY21fvA5a3&Signature=HZpw8yDo9MI5EyblxSiLt09%2BVq8%3D'
          },
          {
            id: 4,
            title: 'ds',
            src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/patrick-schneider-8bPJ0vagphw-unsplash.jpg?Expires=1585224778&OSSAccessKeyId=TMP.3KjgmrSmva2PdsYyNkw3Titx7XTftaWrS9xru1g9ALpwaTEFzpUH5hhLgbqBKyuoA4JCTe9uB9DGg92MaAqiXY21fvA5a3&Signature=8rtDbAvQ%2FR9RrW5YrshsZSeTMPg%3D'
          }, {
            id: 5,
            title: 'ds',
            src: 'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/tony-harding-uugxDhY-7qY-unsplash.jpg?Expires=1585224823&OSSAccessKeyId=TMP.3KjgmrSmva2PdsYyNkw3Titx7XTftaWrS9xru1g9ALpwaTEFzpUH5hhLgbqBKyuoA4JCTe9uB9DGg92MaAqiXY21fvA5a3&Signature=PKNK8lOTQfvvy5aJpxEtFb%2B45Q8%3D'
          }]
      }
    }
  }
}
</script>

<style lang='scss' scoped>

.slider{
  text-align: center;

  height: 260px;
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
