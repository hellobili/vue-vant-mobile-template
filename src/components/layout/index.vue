<template>
  <div class="app-container">
    <!-- <header></header> -->
    <van-nav-bar :title="title" left-text left-arrow @click-left="onClickLeft" />
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      title: localStorage.getItem("title"),
      isFirstEnter: false
    };
  },
  beforeRouteEnter(to, from, next) {
    if (from.name == "nextName") {
      // 这个name是下一级页面的路由name
      to.meta.isBack = true; // 设置为true说明你是返回到这个页面，而不是通过跳转从其他页面进入到这个页面
    }
    next();
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    }
  },
  activated() {
    if (!this.$route.meta.isBack || this.isFirstEnter) {
      this.initData(); // 这里许要初始化dada()中的数据
    }
    this.$route.meta.isBack = false; //请求完后进行初始化
    this.isFirstEnter = false; //请求完后进行初始化
  }
};
</script>

<style lang="stylus">
.app-container {
  color: #37384D;

  .van-nav-bar {
    height: 44px;
    box-sizing: border-box;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.25);

    .van-icon {
      color: #37384D;
      font-size: 18px;
    }
  }
}
</style>>
