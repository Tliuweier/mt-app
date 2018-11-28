<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
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
            @blur="blur" />
          <button class="el-button el-button--primary"><i class="el-icon-search"/> </button>
          <dl
            v-if="isHotPalce"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd>黄埔军校</dd>
            <dd>黄埔军校</dd>
            <dd>黄埔军校</dd>
            <dd>黄埔军校</dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList" >
            <dd>珠江夜游</dd>
            <dd>珠江夜游</dd>
            <dd>珠江夜游</dd>
          </dl>
        </div>
        <p class="suggset">
          <a href="#">广州长隆欢乐世界</a>
          <a href="#">广州长隆野生动物园</a>
          <a href="#">正佳极地海洋世界</a>
          <a href="#">广州塔</a>
        </p>
        <ul class="nav">
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
export default {
  data() {
    return {
      search: '',
      isFocus: false
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
    }
  }
}
</script>

<style>
</style>
