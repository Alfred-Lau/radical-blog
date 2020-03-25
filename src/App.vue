<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang='typescript'>

import Header from './components/Header/header.vue'
import Footer from './components/Footer/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'PingFang SC' sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #314255;
  /* 实现 sticky footer */
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: 100%;
  .content {
    flex: 1;
  }
}

</style>
