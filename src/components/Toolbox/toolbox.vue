<template>
  <div class="toolbox">
    <a class="toolbox-item toolbox-item-wechat" href="/#">
      <span class="toolbox-layer"></span>
    </a>
    <a class="toolbox-item toolbox-item-feedback" href="/#">
      <span></span>
    </a>
    <a class="toolbox-item toolbox-item-app" href="/#">
      <span class="toolbox-layer"></span>
    </a>
    <a class="toolbox-item toolbox-item-top" href="/#">
      <span></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "toolbox"
};
</script>

<style lang="scss">
$toolbox-size: 52px;

.toolbox {
  position: fixed;
  display: block;
  right: 20px;
  bottom: 0;

  &-item {
    background: url("/imgs/toolbar.png") no-repeat;
    width: $toolbox-size;
    height: $toolbox-size;
    position: relative;
    display: block;
    margin-top: 1px;

    transition: background-position 1s;

    &:hover {
      .toolbox-layer {
        opacity: 1;
        filter: alpha(opacity=100);
        transform: scale(1);
      }
    }
  }

  &-item-wechat {
    background-position: 0 -798px;
    &:hover {
      background-position: 0 -860px;
    }

    .toolbox-layer {
      height: 212px;
      background-position: 0 0;
    }
  }

  &-item-feedback {
    background-position: 0 -426px;
    &:hover {
      background-position: 0 -488px;
    }
  }

  &-item-app {
    background-position: 0 -550px;
    &:hover {
      background-position: 0 -612px;
    }

    .toolbox-layer {
      height: 194px;
      background-position: 0 -220px;
    }
  }

  &-item-top {
    background-position: 0 -674px;
    &:hover {
      background-position: 0 -736px;
    }
  }

  &-layer {
    position: absolute;
    right: $toolbox-size - 6;
    bottom: -8px;
    width: 172px;
    background-image: url("/imgs/toolbar.png");
    background-repeat: no-repeat;
    opacity: 0;
    filter: alpha(opacity=0);
    transform: scale(0.01);
    transform-origin: 95% 95%;
    transition: all 1s;
  }
}
</style>
