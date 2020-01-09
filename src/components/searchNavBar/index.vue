<template>
  <van-nav-bar title="标题" left-arrow @click-left="onClickLeft"  @click-right="onClickRight">
    <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" slot="right" />  
  </van-nav-bar>
</template>

<script>
export default {
  methods: {
    onClickLeft(){},
    onClickRight(){}
  }
};
</script>

<style>
</style>