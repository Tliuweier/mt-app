<template>
  <div class="goods-detail">
    <div class="title">
      <h3>广州美团 > 广州美食 > 广州火锅 > 蛙先生邮亭田鸡火锅 > 蛙先生邮亭田鸡火锅2人餐</h3>
    </div>
    <div class="datail clear">
      <div class="left">
        <div class="imgbox">
          <img src="../assets/img/test1.jpg">
        </div>
      </div>
      <div class="info">
        <p class="gtitle">蛙先生邮亭田鸡火锅</p>
        <p class="name">
          仅售68元！最高价值126元的冷锅鲈鱼2人餐，提供免费WiFi。
        </p>
        <div class="line"/>
        <div class="deal-info">
          <dl
            class="detail-row"
            style="padding-bottom: 20px;">
            <dt class="v-bottom">团购价</dt>
            <dd>
              <span class="icon-rmb">￥</span><span class="cprice">68</span>
              <del class="dprice">最高门店价¥126</del>
              <span class="deal-discount">5.4折</span>
              <span class="sold-num">已售45</span>
            </dd>
          </dl>
          <dl
            class="detail-row"
            style="padding-bottom: 20px;">
            <dt class="v-middle">
              套餐
            </dt>
            <dd>
              <div class="deal-tag-wrapper">
                <ul class="deal-tag-list">
                  <li class="deal-tag active">
                    <a >268.0元4人餐</a>
                  </li>
                  <li class="deal-tag">
                    <a >399.0元6人餐</a>
                  </li>
                  <li class="deal-tag">
                    <a >399.0元6人餐</a>
                  </li>
                  <li class="deal-tag">
                    <a >88.0代100.0元券</a>
                  </li>
                  <li class="deal-tag">
                    <a >399.0元6人餐</a>
                  </li>
                  <li class="deal-tag">
                    <a >88.0代100.0元券</a>
                  </li>
                  <li class="deal-tag">
                    <a >88.0代100.0元券</a>
                  </li>
                  <li class="deal-tag">
                    <a >88.0代100.0元券</a>
                  </li>
                </ul>
                <span class="deal-more">
                  展开全部9个套餐
                </span>
              </div>

            </dd>
          </dl>
          <dl
            class="detail-row"
            style="padding-bottom: 20px;">
            <dt class="v-middle">数量</dt>
            <dd>
              <div class="input-number">
                <el-button
                  disabled
                  icon="el-icon-minus"
                  class="sub"/>
                <span>&nbsp;&nbsp;2&nbsp;&nbsp;</span>
                <el-button
                  disabled
                  icon="el-icon-plus"
                  class="add"/>
              </div>
            </dd>
          </dl>
          <dl
            class="detail-row"
            style="padding-bottom: 20px;">
            <dt class="v-middle">有效期</dt>
            <dd>2017.05.07-2019.01.28</dd>
          </dl>
          <dl
            class="deal-action"
            style="padding-bottom: 20px;">
            <el-button
              round>立即抢购</el-button>
          </dl>
          <dl
            class="detail-row "
            style="padding-bottom: 20px;">
            <dt class="v-middle">服务承若</dt>
            <dd>
              <span>免预约</span>
              <span>|随时退</span>
              <span>|过期自动退</span>
            </dd>
          </dl>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.goods-detail {
  ul li {
    list-style: none;
  }
  .title {
    margin: 20px 0 20px 20px;
    color: #666;
  }
  .datail {
    border: 1px solid #e5e5e5;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    .left {
      width: 428px;
      float: left;
      .imgbox {
        height: 320px;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
    }
    .info {
      margin-left: 20px;
      color: #666;
      float: left;
      width: 60%;
      .gtitle {
        line-height: 37px;
        font-size: 26px;
        margin: 0 0 10px;
      }
      .name {
        line-height: 28px;
        font-size: 20px;
        margin: 0 0 10px;
        font-weight: 400;
        color: #222;
      }
      .line {
        border-bottom: 1px solid #e5e5e5;
        overflow: hidden;
        margin: 20px 0 0 0;
        height: 1px;
      }
      .deal-info {
        padding-top: 17px;
        .detail-row {
          overflow: hidden;
          margin: 0;
          dt {
            float: left;
            width: 95px;
            font-size: 14px;
            color: #222;
          }
          .v-bottom {
            padding-top: 28px;
            line-height: 20px;
          }
          .v-middle {
            line-height: 20px;
          }
          dd {
            position: relative;
            margin-left: 95px;
            font-size: 14px;
            color: #666;
            .icon-rmb {
              font-size: 16px;
              font-style: normal;
              color: #f90;
            }
            .cprice {
              font-size: 38px;
              line-height: 53px;
              font-style: normal;
              color: #f90;
            }
            .dprice {
              margin-left: 10px;
              font-size: 12px;
              color: #999;
            }
            .deal-discount {
              position: relative;
              display: inline-block;
              margin-left: 5px;
              color: #fa952f;
              font-size: 12px;
              line-height: 14px;
              background-color: #fef4ea;
            }
            .sold-num {
              float: right;
              padding-top: 26px;
              font-size: 12px;
              color: #666;
            }
            .deal-tag-list {
              .deal-tag {
                float: left;
                margin-bottom: 16px;
                a {
                  box-sizing: border-box;
                  display: block;
                  padding: 0 10px;
                  margin-right: 16px;
                  height: 36px;
                  line-height: 36px;
                  color: #666;
                  text-decoration: none;
                  border: 1px solid #e5e5e5;
                  border-radius: 2px;
                  text-align: center;
                  cursor: pointer;
                }
              }
              .active a {
                color: #fff;
                background-color: #31bbac;
                border-color: #31bbac;
              }
            }
            .deal-more {
              font-size: 12px;
              line-height: 17px;
              color: #31bbac;
              cursor: pointer;
              float: left;
            }
            .input-number {
              display: inline-block;
              border: 1px solid #e5e5e5;
              border-radius: 5px;
              text-align: center;
              .el-button {
                padding: 12px 12px;
                background: #fff;
                border-bottom: none;
                border-top: none;
                border-radius: 5px;
              }
              .sub {
                border-left: none;
              }
              .add {
                border-right: none;
              }
            }
          }
        }
        .deal-action {
          padding-left: 95px;
          margin-bottom: 27px;
          .el-button {
            background: #f90;
            color: #fff;
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
}
</style>
