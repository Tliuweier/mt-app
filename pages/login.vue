<template>
  <div class="page-login">
    <div class="login-header">
      <a
        href="/"
        class="logo"/>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网">
      </div>
      <div class="form">
        <h4
          v-if="error"
          class="tips">
          <i/>{{ error }}
        </h4>
        <p><span>账号登录</span></p>
        <el-input
          v-model="username"
          prefix-icon="profile"
          placeholder="请输入账号"/>
        <el-input
          v-model="password"
          prefix-icon="password"
          type="password"
          placeholder="请输入密码"/>
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <p>还没有账号? <a href="/register">免费注册</a> </p>
        <el-button
          class="btn-login"
          type="succcess"
          size="mini">
          登录
        </el-button>
      </div>
    </div>
    <footer class="footer">
      <div class="site-info-nav cf">
        <ul>
          <li class="first">
            <a
              rel="nofollow"
              href="https://about.meituan.com/about.html">关于美团</a></li>
          <li>
            <a
              rel="nofollow"
              href="https://zhaopin.meituan.com/">加入我们</a></li>
          <li>
            <a
              rel="nofollow"
              href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a></li>
          <li>
            <a
              rel="nofollow"
              href="https://www.meituan.com/help/faq">帮助中心</a></li>
          <li class="last"><a href="http://meituan.com/mobile">美团手机版</a></li>
        </ul>
      </div>
      <div class="copyright">
        <p>
          ©<span>2018</span>
          <a href="https://www.meituan.com">美团网团购</a>
          meituan.com
          <a
            href="http://www.miibeian.gov.cn/"
            target="_blank">京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      username: '',
      password: '',
      checked: '',
      error: ''
    }
  }
}
</script>

<style lang="scss" >
@import '@/assets/css/login/index.scss';
.layout-blank {
  height: 80vh;
}
p,
.el-input,
.foot {
  margin-bottom: 10px;
}
footer {
  margin: 0 auto 30px;
  clear: both;
  width: 980px;
  font-size: 12px;
  color: #999;
  .site-info-nav {
    margin-bottom: 20px;
    padding: 12px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 24px;
    ul {
      float: left;
      width: 594px;
      color: #eee;
    }
    li {
      list-style: none;
      float: left;
      margin: 5px 0;
      padding: 0 16px;
      line-height: 14px;
      border-right: 1px solid #eee;
      a {
        color: #999;
      }
    }
    .first {
      padding-left: 0;
    }
    .last {
      border-right: none;
    }
  }
  .cf {
    zoom: 1;
    &:after {
      display: block;
      clear: both;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
  .copyright {
    text-align: left;
    clear: both;
    font-size: 12px;
    font-family: initial;
    a {
      color: #999;
    }
  }
}
</style>
