<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer height="100%">
      <div>ssd</div>
    </el-footer>
  </el-container>

</template>

<style>
</style>
<script>
import MyHeader from '@/components/public/header/index.vue'
export default {
  components: {
    MyHeader
  }
}
</script>
