<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <slider/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"/>
      </el-col>
      <el-col :span="6">
        <template v-if="user">
          <div class="m-life-default" >
            <el-col><div style="float: right">
              <i
                style="font-size: 20px;"
                class="iconfont icon-shezhi"/> </div></el-col>
            <el-col><div style="text-align: center;margin: 0 auto 4px;"><img
              src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png"
              alt="头像1"></div></el-col>
            <el-col style="text-align: center;height: 30px;margin: 0 auto 4px;"><a class="fn-username">{{ user }} </a><a><i class="iconfont icon-v1"/></a></el-col>
            <el-col style="text-align: center;">
              <div class="fn-item"><i class="iconfont icon-tubiaolunkuo-" /><p class="fn-name">我的订单</p></div>
              <div
                class="fn-item"
                style="margin-top:2px;"><i class="el-icon-star-on" /><p class="fn-name">我的收藏</p></div>
              <div class="fn-item"><i class="iconfont icon-kaquan" /><p class="fn-name">抵用券</p></div>
            </el-col>
            <el-col style="text-align: center">
              <div
                class="fn-item"><i class="iconfont icon-yuebao" /><p class="fn-name">余额</p></div>
              <div
                class="fn-item"
                style="margin-top: 2px;"><i class="el-icon-more" /><p class="fn-name">更多</p></div>
            </el-col>
          </div>
        </template>
        <template v-else>
          <div class="m-life-login">
            <h4><img
              src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
              alt=""></h4>
            <p class="m-life-login-name">Hi!你好</p>
            <p><nuxt-link to="/register"><el-button
              round
              size="medium">注册</el-button> </nuxt-link>
            </p>
            <p><nuxt-link to="/login"><el-button
              round
              size="medium">立即登录</el-button> </nuxt-link>
            </p>
          </div>
        </template>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"/>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"/>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP">
          <p>美团APP手机版</p>
          <h4><span class="red">1元起</span><em class="gary">吃喝玩乐</em> </h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from './slider.vue'
export default {
  components: {
    Slider
  },
  data() {
    return {
      user: ''
    }
  },
  async mounted() {
    const {
      status,
      data: { user }
    } = await this.$axios.get('/users/getUser')
    if (status === 200) {
      this.user = user
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/life.scss';
.fn-username {
  font-size: 16px;
  color: #222;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  width: 6em;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
}
.icon-v1 {
  color: #ffb84e;
}
.fn-item {
  width: 33.3%;
  float: left;
  i {
    font-size: 20px;
    color: #96e4da;
  }
  .fn-name {
    font-size: 12px;
    color: #222;
    margin: 5px 0;
  }
}
</style>
