<template>
  <div class="menu">
    <ul class="menu-items">
      <li class="menu-item"><span><router-link to="/">首页</router-link></span></li>
      <li class="menu-item"><span><router-link to="/piecework">归档</router-link></span></li>
      <li class="menu-item"><span><router-link to="/meaning">林泉之秀</router-link></span></li>
      <li class="menu-item"><span><router-link to="/about">关于我</router-link></span></li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.menu {
    font-family: BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    color: rgba($color: #4a4a4a, $alpha: .65);
  &-items{
    display: flex;
    flex-direction: row;
  }

  &-item{
    color: #4a4a4a;
    list-style: none;

    span {
      border-right: 1px solid #eeeeff;
      padding: 0 20px;
      display: inline-block;
      line-height: 20px;
      a{

        color: #4a4a4a;
      }
    }
  }
}
</style>>
