<template>
  <div class="hot-place">
    <h3>热门城市：</h3>
    <p>
      <a>北京</a>
      <a>上海</a>
      <a>广州</a>
      <a>深圳</a>
      <a>天津</a>
      <a>南京</a>
      <a>杭州</a>
      <a>武汉</a>
      <a>佛山</a>
      <a>西安</a>
      <a>成都</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotPlace: []
    }
  }
}
</script>

<style lang="scss">
.hot-place {
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
  h3 {
    display: inline-block;
  }
  p {
    display: inline-block;
    a {
      color: #666;
      margin: 0 20px;
      font-size: 14px;
    }
  }
}
</style>
