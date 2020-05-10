<template>
  <div class="work">
    <div class="timeline">
      <TimelineItem
        :key="item.id"
        :data="item"
        v-for="item in infos"
      ></TimelineItem>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TimelineItem from "@/components/TimelineItem/timelineitem";
export default {
  name: "Work",
  components: {
    TimelineItem
  },
  data() {
    return {
      infos: [
        {
          text: "向个人项目进行日常迭代",
          date: "2020 02 04",
          category: {
            tag: "development",
            color: "#018f69"
          },
          link: {
            url: "",
            text: "More"
          }
        },
        {
          text: "向个人项目进行日常迭代",
          date: "2020 02 04",
          category: {
            tag: "development",
            color: "red"
          },
          link: {
            url: "",
            text: "More"
          }
        },
        {
          text: "向个人项目进行日常迭代",
          date: "2020 02 04",
          category: {
            tag: "development",
            color: "blue"
          },
          link: {
            url: "",
            text: "More"
          }
        },
        {
          text: "向个人项目进行日常迭代",
          date: "2020 02 04",
          category: {
            tag: "development",
            color: "yellow"
          },
          link: {
            url: "",
            text: "More"
          }
        },
        {
          text: "向个人项目进行日常迭代",
          date: "2020 02 04",
          category: {
            tag: "development",
            color: "blue"
          },
          link: {
            url: "",
            text: "More"
          }
        },
        {
          text: "向个人项目进行日常迭代",
          date: "2020 02 04",
          category: {
            tag: "development",
            color: "blue"
          },
          link: {
            url: "",
            text: "More"
          }
        },
        {
          text: "向个人项目进行日常迭代",
          date: "2020 02 04",
          category: {
            tag: "development",
            color: "blue"
          },
          link: {
            url: "",
            text: "More"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato");

.work {
  font-family: "Lato", sans-serif;
  .timeline {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    position: relative;
  }

  /* 竖线的实现 */
  .timeline::after {
    background-color: #e17b77;
    content: "";
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
}
</style>
