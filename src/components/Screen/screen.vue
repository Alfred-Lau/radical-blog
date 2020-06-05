<template>
  <div class="screen">
    <img src="/imgs/avatar.png" alt="" class="avatar" />
    <section class="card">
      <h1 class="name">刘健</h1>
      <p class="brief">
        本科毕业于厦门大学，研究生毕业于中科大，对 JS 相关的所有内容抱有热情
      </p>
      <a class="contact" href="mailto:jian.liu@icloud.com" rel="nofollow">
        联系我
      </a>
      <p class="intro">
        现居杭州。喜欢知其然，更爱知其所以然，对工程化有较多实践，平时喜欢写一些<a
          href="https://lazy-minus-your-intelligence.com/"
          >博客</a
        >和<a href="https://github.com/Alfred-Lau" target="_blank">开源项目</a
        >，开卷有益，来者不拒。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "screen"
};
</script>

<style lang="scss">
.screen {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 620px;
  margin: auto;
  padding-bottom: 60px;
  max-width: 80%;

  .card {
    position: relative;
    padding: 40px 25px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 20px 20px 60px #cad0ca, -20px -20px 60px #ffffff;
    .name {
      margin: 30px 0 10px 0;
      text-align: center;
      font-size: 30px;
      color: #333;
    }
    .brief {
      line-height: 26px;
      margin: 10px 0 20px 0;
      text-align: center;
      font-size: 16px;
      color: #888;
    }
    .contact {
      margin: 0 auto;
      letter-spacing: 5px;
      position: relative;
      padding-left: 45px;
      box-sizing: border-box;
      border-radius: 5px;
      display: block;
      width: 380px;
      height: 50px;
      line-height: 50px;
      background: #3273dc;
      color: #fff;
      text-decoration: none;
      text-align: center;
      font-size: 16px;
      max-width: 100%;
    }

    .intro {
      margin: 20px auto;
      width: 380px;
      line-height: 26px;
      font-size: 16px;
      color: #333;
      text-align: justify;
      max-width: 100%;
      a {
        margin: 0 2px;
        color: #3273dc;
      }
    }
  }
  .avatar {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    z-index: 100;
    border-radius: 50%;
    width: 120px;
    max-width: 30%;
  }
}
</style>
