<template>
  <div class="menu">
    <ul class="menu-items">
      <li class="menu-item"><span><router-link to="/">~~</router-link></span></li>
      <li class="menu-item"><span><router-link to="/piecework">所以然</router-link></span></li>
      <li class="menu-item"><span><router-link to="/meaning">码上来</router-link></span></li>
      <li class="menu-item"><span><router-link to="/tourist">林泉之秀</router-link></span></li>
      <li class="menu-item"><span><router-link to="/reading">明日之屋</router-link></span></li>
      <li class="menu-item"><span><router-link to="/about">我</router-link></span></li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.menu {
    font-family: Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    color: rgba($color: #000000, $alpha: .65);
  &-items{
    display: flex;
    flex-direction: row;
  }

  &-item{
    color: #000;
    list-style: none;

    span {
      border-right: 1px solid #eeeeff;
      padding: 0 20px;
      display: inline-block;
      line-height: 20px;
      a{

        color: #000;
      }
    }
  }
}
</style>>
