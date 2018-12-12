<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <artistic/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <movie/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <fnav/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Emenu from '~/components/index/menu.vue'
import Life from '~/components/index/life.vue'
import food from '~/components/index/food.vue'
import artistic from '~/components/index/artistic.vue'
import movie from '~/components/index/movie.vue'
import fnav from '~/components/index/fnav.vue'

export default {
  components: {
    Logo,
    Emenu,
    Life,
    food,
    artistic,
    movie,
    fnav
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/index.scss';
</style>
