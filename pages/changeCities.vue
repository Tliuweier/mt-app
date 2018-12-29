<template>
  <div class="page-changeCitys">
    <el-row>
      <el-col :span="24">
        <is-select/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot-place/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <lately-visit/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <categroy/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import isSelect from '~/components/changeCity/isSelect.vue'
import hotPlace from '~/components/changeCity/hotPlace.vue'
import latelyVisit from '~/components/changeCity/latelyVisit.vue'
import categroy from '~/components/changeCity/categroy.vue'
export default {
  components: {
    isSelect,
    hotPlace,
    latelyVisit,
    categroy
  },
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss">
.page-changeCitys {
  width: 1170px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  margin-top: 40px;
  min-height: 1000px;
  padding: 20px;
  overflow: hidden;
  margin-left: 20px;
}
</style>
