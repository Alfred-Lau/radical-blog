<template>
  <div :class='{header : true, fixed : isFixed}' >
    <h3 class="header-title">
      <a href="" class="big-title">十年挑灯看剑</a>
      <div class="menu-wrapper">
        <Menu></Menu>
      </div>
    </h3>

    <div class="search">
      <input type="search" v-model="query" class="search-box">搜我
    </div>
  </div>
</template>

<script lang='typescript'>
import Menu from '../Menu/menu.vue';

export default {
  name: 'Header',
  components: {
    Menu
  },
  data () {
    return {
      query: '',
      isFixed: false
    };
  },
  mounted () {
    // 需要添加防抖
    window.addEventListener('scroll', () => {
      // 滚动 距离上部 Header 组件高度的时候 fixed
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      if (top > 50) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    });
  }

};
</script>

<style lang='scss'>

.fixed {
  position: fixed;
  top: 0;
  box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
  z-index: 10;
  // transition: top 1s;
}

.header {
  width: 100%;
  background: #fff;
  color:#314255;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  &-title {
    float: left;
    padding-left: 60px;
    height: 100%;
    .big-title {
      color: #222;
    }
    .menu-wrapper {
      display: inline-block;
      margin-left: 100px;
    }
  }

  .search {
    height: 120px;
    float: right;
    margin-right: 40px;
    &-box {
      width: 220px;
      height: 30px;
      line-height: 30px;
      margin-right: 10px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #eee;
      padding: 0 5px;

      transition: width .8s, border-color .8s;
      &:focus{
        width: 400px;
        border-color: #ccc;
      }
    }
  }
}

</style>
