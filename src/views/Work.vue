<template>
  <div class="work">
    我是事业主页
    <section class="card-area">
      <div class="card">
        <router-link to="/piecework/css">
          <span class="title">CSS 效果练手</span>
        </router-link>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Work'

}
</script>

<style lang="scss" scoped>

.work {
  .card-area {
    .card {
      border-radius: 10px;
      background: #3344;
    }
  }
}

</style>
