<template>
  <div class="welcome">
    <div class="content">
      <div class="btn go" @click="goToNewSite">去新站看看</div>
      <div class="btn stay" @click="stay">留在旧站</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    goToNewSite() {
      this.$emit("goToNewSite");
    },
    stay() {
      this.$emit("stay");
    },
    forbidScroll(e) {
      /* 先干掉默认行为 */
      e.preventDefault && e.preventDefault();
      /* 再干掉默认类 */
      document.documentElement.style.overflow = "hidden";

      e.returnValue = false;
      e.stopPropagation && e.stopPropagation();
      return false;
    }
  },
  created() {
    document.addEventListener("mousewheel", this.forbidScroll, {
      passive: false
    });
  },
  destroyed() {
    document.removeEventListener("mousewheel", this.forbidScroll);
    document.documentElement.style.overflow = "";
  }
};
</script>

<style lang="scss">
.welcome {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 1000;
  .content {
    position: relative;
    display: inline-block;
    top: 20%;
    height: 480px;
    width: 720px;
    margin: 0 auto;
    background: url("/imgs/welcome.png") no-repeat;
    background-size: 720px auto;
    .btn {
      position: absolute;
      bottom: 97px;
      font-size: 12px;

      &:hover {
        cursor: pointer;
      }
    }

    .go {
      left: 90px;
      background: #597ef7;
      padding: 3px 10px;
    }

    .stay {
      left: 202px;
      background: #7db308;
      padding: 3px 10px;
    }
  }
}
</style>
