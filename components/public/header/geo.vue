<template>
  <div class=" m-geo">
    <i class="el-icon-location"/>{{ address }}
    <nuxt-link
      class="changeCity"
      to="/changeCity">切换城市</nuxt-link>
    [ 广州  佛山  深圳 ]
  </div>
</template>

<script>
export default {
  data() {
    return { address: '广州' }
  }
}
</script>

<style lang="css">
</style>
