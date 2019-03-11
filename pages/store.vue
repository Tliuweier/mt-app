<template>
  <div class="page-store">
    <div>广州美团>广州美食</div>
    <el-row :gutter="20">
      <el-col :span="18">
        <stores/>
      </el-col>
      <el-col :span="6">
        <amap/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <list/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import stores from '~/components/store/condition.vue'
import list from '~/components/store/list.vue'
import Amap from '@/components/public/map.vue'
export default {
  components: {
    stores,
    list,
    Amap
  }
}
</script>

<style lang="scss">
</style>
