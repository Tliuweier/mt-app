<template>
  <div class=" m-geo">
    <i class="el-icon-location"/>{{ address }}
    <nuxt-link
      class="changeCity"
      to="/changeCity">切换城市</nuxt-link>
    <div class="near-citys">[
      <a
        class="city-guess"
        href="https://fs.meituan.com">佛山</a>
      <a
        class="city-guess"
        href="https://sd.meituan.com">顺德</a>
      <a
        class="city-guess"
        href="https://ns.meituan.com">南沙</a>]
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { address: '广州' }
  }
}
</script>

<style lang="scss">
.m-geo {
  padding-left: 20px;
  .near-citys {
    display: inline-block;
    a {
      color: #999;
    }
    .city-guess {
      margin: 0 4px;
    }
  }
}
</style>
