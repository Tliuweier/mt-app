<template>
  <div class=" m-geo">
    <i class="el-icon-location"/>{{ cityname }}
    <nuxt-link
      :to="{name:'changeCities'}"
      class="changeCity">切换城市</nuxt-link>
    <div class="near-citys">[
      <nuxt-link
        :to="{name:'details'}"
        class="city-guess">佛山</nuxt-link>
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
import { mapGetters } from 'vuex'
export default {
  data() {
    return { city: '' }
  },
  computed: {
    cityname() {
      return this.$store.state.geo.position.city
    }
  },
  watch: {
    city: function() {
      this.city = CITYNAME
    }
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
