<template>
  <div class="hot-place">
    <h3>热门城市：</h3>
    <p
      v-for="item in hotcitys"
      :key="item.id">
      <a>{{ item.name }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    hotcitys: {
      type: Array,
      default() {
        return []
      }
    }
  },
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
