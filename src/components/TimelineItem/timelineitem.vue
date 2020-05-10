<template>
  <div class="timeline-item">
    <div class="timeline-item-content">
      <span class="tag" :style="styleObject">
        {{ data.category.tag }}
      </span>
      <time>{{ data.date }}</time>

      <div>{{ data.text }}</div>
      <a
        :href="data.link.url"
        target="_blank"
        rel="noopener noreferrer"
        v-if="data.link"
      >
        {{ data.link.text }}
      </a>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timelineItem",
  computed: {
    styleObject() {
      return {
        background: this.data.category.color
      };
    }
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss">
/* 设置时间轴样式 */
.timeline-item {
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  padding-right: 30px;
  margin: 10px 0;
  width: 50%;
}

.timeline-item:nth-child(odd) {
  align-self: flex-end;
  justify-content: flex-start;
  padding-right: 0px;
  padding-left: 30px;
}

.timeline-item-content {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  max-width: 70%;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  padding: 15px;
  position: relative;
}

.timeline-item:nth-child(odd) .timeline-item-content {
  align-items: flex-start;
  text-align: left;
}

/* 小三角的实现 */
.timeline-item-content::after {
  content: "";
  background-color: #fff;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  position: absolute;
  right: -7.5px;
  top: calc(50% - 7.5px);
  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
}

.timeline-item:nth-child(odd) .timeline-item-content::after {
  right: auto;
  left: -7.5px;
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
}

.timeline-item-content .tag {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
}

.timeline-item:nth-child(odd) .timeline-item-content .tag {
  left: auto;
  right: 5px;
}

.timeline-item-content time {
  color: #777;
  font-size: 12px;
}

.timeline-item-content p {
  font-size: 16px;
  line-height: 24px;
  margin: 15px 0;
  max-width: 250px;
}

.timeline-item-content a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.timeline-item-content a::after {
  content: ">";
  font-size: 12px;
}

.timeline-item-content .circle {
  background-color: #fff;
  border: 3px solid #e17b77;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -40px;
  width: 20px;
  height: 20px;
  z-index: 100;
}

.timeline-item:nth-child(odd) .timeline-item-content .circle {
  right: auto;
  left: -40px;
}

@media only screen and (max-width: 767px) {
  .timeline-item-content,
  .timeline-item:nth-child(odd) .timeline-item-content {
    padding: 15px 10px;
    text-align: center;
    align-items: center;
  }

  .timeline-item-content .tag {
    width: calc(100% - 10px);
  }

  .timeline-item-content time {
    margin-top: 20px;
  }

  .timeline-item-content a {
    text-decoration: underline;
  }

  .timeline-item-content a::after {
    display: none;
  }
}
</style>
