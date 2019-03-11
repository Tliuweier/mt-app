<template>
  <div class="lately-visit">
    <h3>最近访问：</h3>
    <p
      v-for="item in recentcities"
      :key="item.id">
      <a>{{ item.name }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    recentcities: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
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
