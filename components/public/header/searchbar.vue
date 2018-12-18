<template>
  <div class="search-panel">
    <el-row
      :style="name !== 'index'?'height:130px':'height:157px'"
      class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团">
      </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"/>
          <button class="el-button el-button--primary"><i class="el-icon-search"/> </button>
          <dl
            v-if="isHotPalce"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item ,idx) in $store.state.home.hotPlace.slice(0,4)"
              :key="idx">{{ item.name }}</dd>

          </dl>
          <dl
            v-if="isSearchList"
            class="searchList" >
            <dd
              v-for="(item ,idx) in searchList"
              :key="idx">{{ item.name }}</dd>
          </dl>
        </div>
        <!--推荐-->
        <p class="suggest">
          <a
            v-for="(item ,idx) in $store.state.home.hotPlace.slice(0,5)"
            :key="idx"
            href="#">{{ item.name }}</a>

        </p>
        <ul
          v-if="name === 'index'"
          class="nav">
          <li>
            <nuxt-link
              to="/"
              class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund"/><p class="txt">随时退</p> </li>
          <li><i class="single"/><p class="txt">不满意免单</p> </li>
          <li><i class="overdue"/><p class="txt">过期退</p> </li>
        </ul>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      searchList: [],
      hotPlace: [],
      name: ''
    }
  },
  computed: {
    isHotPalce: function() {
      return this.isFocus && !this.search
    },
    isSearchList: function() {
      return this.isFocus && this.search
    }
  },
  mounted() {
    this.name = this.$nuxt.$route.name
    console.log(this.name)
  },
  methods: {
    focus: function() {
      this.isFocus = true
    },
    blur: function() {
      //debugger
      let self = this
      setTimeout(function() {
        self.isFocus = false
      }, 200)
    },
    input: _.debounce(async function() {
      let _this = this
      let city = _this.$store.state.geo.position.city.replace('市', '')
      let input = _this.search
      _this.searchList = []
      let {
        status,
        data: { top }
      } = await _this.$axios.get('/search/top', {
        params: {
          city,
          input: input
        }
      })
      if (status === 200) {
        _this.searchList = top.slice(0, 10)
      }
    }, 300)
  }
}
</script>

<style>
</style>
