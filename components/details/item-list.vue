<template>
  <div
    class="item-list">
    <div class="pic">
      <div class="imgbox">
        <img src="../../assets/img/test1.jpg" >
      </div>
    </div>
    <div class="info">
      <div style="display: inline-block;">
        <p class="name">
          <span>精选套餐，建议2-3人使用</span>
          <!--<img src="http://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png" class="icon">-->
        </p>
        <p class="sale">已售15</p>
        <p class="price"><b>￥</b>198<span>门店价￥430</span></p>
      </div>
      <el-button
        round
        size="small">立即购买</el-button>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
.item-list {
  margin-bottom: 10px;
  background: #fff;
  color: #666;
  padding: 0px 0px 10px 20px;
  border-bottom: 1px solid #e5e5e5;
  .pic {
    display: inline-block;
    width: 100px;
    height: 100px;
    .imgbox {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
  }
  .info {
    display: inline-block;
    width: 780px;
    padding: 1px 0px 10px 20px;
    .name {
      font-size: 16px;
      line-height: 22px;
      cursor: pointer;
    }
    .sale {
      font-size: 12px;
      color: #666;
      line-height: 17px;
      margin: 1px 0 22px;
      cursor: pointer;
    }
    .price {
      font-size: 30px;
      color: #f60;
      cursor: pointer;
      span {
        color: #999;
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
  .el-button {
    display: inline-block;
    float: right;
    background: #f90;
    color: #fff;
    margin: 30px;
  }
  &:last-child {
    border-bottom: none;
  }
}
</style>
