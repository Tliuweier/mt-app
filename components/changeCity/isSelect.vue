<template>
  <div class="is-select">
    <span>按省份选择:</span>
    <el-select placeholder="省份">
      <el-option
        lang="北京"
        value="北京"/>
      <el-option
        lang="广州"
        value="广州"/>
      <el-option
        lang="上海"
        value="上海"/>
    </el-select>
    <el-select placeholder="城市">
      <el-option
        lang="北京"
        value="北京"/>
      <el-option
        lang="广州"
        value="广州"/>
      <el-option
        lang="上海"
        value="上海"/>
    </el-select>
    <span class="title">直接搜索:</span>
    <el-autocomplete placeholder="请输入城市中文或拼音"/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.is-select {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 30px;
  .el-select {
    margin-left: 15px;
  }
  .title {
    margin: 0 20px 0 40px;
  }
}
</style>
