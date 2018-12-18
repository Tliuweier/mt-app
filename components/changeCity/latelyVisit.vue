<template>
  <div class="lately-visit">
    <h3>最近访问：</h3>
    <p>
      <a>北京</a>
      <a>上海</a>
      <a>广州</a>
      <a>深圳</a>
      <a>天津</a>
      <a>南京</a>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.lately-visit {
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
  h3 {
    display: inline-block;
  }
  p {
    display: inline-block;
    a {
      color: #666;
      font-size: 14px;
      margin: 0 20px;
    }
  }
}
</style>
