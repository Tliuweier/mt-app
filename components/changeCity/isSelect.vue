<template>
  <div class="is-select">
    <span>按省份选择:</span>
    <el-select
      v-model="value"
      placeholder="请选择省份"
      @change="selectprovince">
      <el-option
        v-for="item in selectcity"
        :key="item.provinceCode"
        :value="item.provinceName"
        :label="item.provinceName"/>
    </el-select>
    <el-select
      v-model="value2"
      :disabled="state"
      placeholder="请选择城市"
      @change="choseCity">
      <el-option
        v-for="item in cityList"
        :key="item.id"
        :value="item.name"
        :label="item.name"/>
    </el-select>
    <span class="title">直接搜索:</span>
    <el-autocomplete placeholder="请输入城市中文或拼音"/>
  </div>
</template>

<script>
export default {
  props: {
    selectcity: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      name5: '北京',
      value: '',
      value2: '',
      cityList: [],
      state: true
    }
  },
  methods: {
    selectprovince: function() {
      this.state = false
      const index = this.value
      const newArr = this.selectcity.filter(function(arr) {
        return arr.provinceName === index
      })
      this.cityList = newArr[0].cityInfoList
    },
    choseCity: function() {
      console.log(this.$store)
      const obj = {}
      obj.province = this.value + '省'
      obj.city = this.value2 + '市'
      ////this.$store.dispatch('changeCity', obj)
      console.log(obj)
      this.$store.dispatch('geo/changeCity', obj)
      this.$router.push('/')
    }
  }
}
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
