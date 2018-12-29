<template>
  <div
    class="vouchers-list">
    <div class="picer">
      <span class="pic">￥88</span>
      代100元代金券
    </div>
    <div class="info">
      <div style="display: inline-block;">
        <p class="name">
          <span>精选套餐，建议2-3人使用</span>
          <!--<img src="http://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png" class="icon">-->
        </p>
        <p class="sale">已售15</p>
      </div>
      <el-button
        round
        size="small">立即登录</el-button>

    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.vouchers-list {
  margin-bottom: 10px;
  background: #fff;
  color: #666;
  padding: 0px 0px 10px 20px;
  border-bottom: 1px solid #e5e5e5;
  .picer {
    display: inline-block;
    width: 140px;
    height: 89px;
    background-size: 100% 100%;
    background-image: url('../../assets/img/meituanw.png');
    text-align: center;
    padding: 20px 10px 0;
    color: #666;
    font-size: 14px;
    .pic {
      display: block;
      font-size: 30px;
      border-bottom: 1px dashed #ccc;
      color: #f60;
      line-height: 36px;
      margin-bottom: 9px;
      padding-bottom: 8px;
    }
  }
  .info {
    display: inline-block;
    width: 720px;
    padding: 1px 0px 10px 20px;
    position: relative;
    top: -35px;
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
  }
  .el-button {
    display: inline-block;
    float: right;
    background: #f90;
    color: #fff;
    margin-right: 30px;
  }
  &:last-child {
    border-bottom: none;
  }
}
</style>
