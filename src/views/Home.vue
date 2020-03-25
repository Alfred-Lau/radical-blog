<template>
  <div class="home">
    <section class="block left">
      <div class="left-container">
        我是左侧 block
      </div>
    </section>
    <section class="block main">
      <div class="main-container">
        中心放我的原创文章
      </div>
    </section>
    <section class="block right">
       <div class="right-container">
        我是右侧影响力 block
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
$bgcolor: #ddd;

.home {
  background: $bgcolor;
  display: flex;
  flex-direction: row;

  height: 100%;
  .block {

  }

  .left{
    flex: 1;
    &-container {
      background: #fff;
      margin: 10px;
      padding: 20px;
    }
  }

  .main {
    flex: 2;
    &-container {
        background: #fff;
        margin: 10px;
        padding: 20px;
    }
  }

  .right {
    flex:1;
    &-container {
      background: #fff;
      margin: 10px;
      padding: 20px;
    }
  }

}
</style>
