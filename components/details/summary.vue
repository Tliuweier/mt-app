<template>
  <div class="detail-summary clear">
    <div class="d-left">
      <div class="name">99美味(西区店)  <span><i class="iconfont icon-renzhengdunpaianquanbaozhangzhibao"/>食品安全档案</span></div>
      <div class="score">
        <el-rate
          v-model="value5"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
          style="display: inline-block"/>
        <span style="margin-left: 4px;">人均￥20</span>
      </div>
      <div class="address">
        <p>地址：蓬江区白沙大道西19号110室 <i class="el-icon-location"/></p>
        <p>电话：0750-3566576/13725950576</p>
        <p>营业时间：周一至周日 11:00-21:00</p>
      </div>
    </div>
    <div class="d-right">
      <div class="right-img">
        <img src="../../assets/img/test1.jpg">
      </div>
      <ul>
        <li><img src="../../assets/img/test1.jpg"></li>
        <li><img src="../../assets/img/test1.jpg"></li>
        <li><img src="../../assets/img/test1.jpg"></li>
        <li><img src="../../assets/img/test1.jpg"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value5: 4.6
    }
  }
}
</script>

<style lang="scss">
.detail-summary {
  border: 1px solid #e5e5e5;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-left: 20px;
  border-radius: 10px;
  color: #666;
  font-size: 12px;
  padding: 20px 20px 33px;
  .d-left {
    float: left;
    width: 720px;
    padding-right: 20px;
    .name {
      line-height: 37px;
      font-size: 26px;
      span {
        font-size: 12px;
        float: right;
        color: #00c9b3;
      }
    }
    .score {
      font-size: 14px;
      margin: 6px 0 17px;
      height: 14px;
    }
    .address {
      border-bottom: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      padding: 16px 0 11px;
      p {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .d-right {
    float: left;
    width: 384px;
    .right-img {
      img {
        width: 380px;
        height: 214px;
        border-radius: 5px;
      }
    }
    ul {
      list-style: none;
      padding-top: 10px;
      width: 384px;
      li {
        float: left;
        width: 92px;
        height: 50px;
        margin-right: 4px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
    }
  }
}
.clear {
  &:after {
    clear: both;
    content: '';
    display: block;
    width: 0;
    height: 0;
  }
}
</style>
