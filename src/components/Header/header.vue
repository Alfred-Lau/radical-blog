<template>
  <div class='header'>
    <h3 class="header-title">
      <a href="">十年挑灯看剑</a>
      <div class="menu-wrapper">
        <Menu></Menu>
      </div>
    </h3>
  </div>
</template>

<script lang='typescript'>
import Menu from '../Menu/menu.vue'

export default {
  name: 'Header',
  components: {
    Menu
  }
}
</script>

<style lang='scss'>

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
    .menu-wrapper {
      display: inline-block;
      margin-left: 100px;
    }
  }
}

</style>
