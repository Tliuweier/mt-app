<template>
  <div class="page-changeCitys">
    <el-row>
      <el-col :span="24">
        <is-select :selectcity="provincecityinfo"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot-place :hotcitys="hotCities"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <lately-visit :recentcities="recentCities"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <categroy :opencitylists="openCityList" />
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
      name: '',
      hotCities: [],
      openCityList: [],
      recentCities: [],
      currentCity: [],
      provincecityinfo: []
    }
  },
  async asyncData(ctx) {
    let _this = this
    let { status, data } = await ctx.$axios.get(
      `https://www.easy-mock.com/mock/5c3d267b64a635155144871a/example/city/getCity`
    )
    if (status === 200) {
      if (data.code == 1) {
        // console.log(data.data)
        return {
          currentCity: data.data.cityList[0].currentCity,
          hotCities: data.data.cityList[0].hotCities,
          openCityList: data.data.cityList[0].openCityList,
          recentCities: data.data.cityList[0].recentCities,
          provincecityinfo: data.data.cityList[0].provincecityinfo
        }
      }
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
