<template>
  <div class="storeList">
    <div class="list">
      <div>
        <div class="tags">
          <span><a>默认</a></span>
          <span><a>销量</a></span>
          <span><a>价格</a></span>
          <span><a>好评最多</a></span>
        </div>
        <div class="line"/>
      </div>
      <div>
        <ul class="list-ul">
          <li class="clear btm">
            <div class="img">
              <a>
                <div class="fl-count">1</div>
                <div
                  class="imgbox"
                  style="height: 125px;width: 220px;">
                  <img
                    style="width: 100%;height: 100%;border-radius: 5px;"
                    src="../../assets/img/test1.jpg">
                </div>
              </a>
            </div>
            <div class="info">
              <a>
                <h4>duota哆糖·定制蛋糕·DIY烘焙体验</h4>
                <div class="source clear">
                  <el-rate
                    v-model="value5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}分"/>
                  <span class="comment">99条评论</span>
                </div>
                <p class="desc">
                  海珠区海珠区丽影广场c区b座2402
                  <span>人均￥153</span>
                </p>
              </a>
              <div
                v-if="true"
                class="other">
                <div>
                  <a>
                    <div class="one">
                      <h4>蛋糕3选1,约8英寸，圆</h4>
                      <p>
                        <span>
                          <b class="dl">￥</b>56
                        </span>
                        <b class="sale">已售17</b>
                      </p>
                    </div>
                  </a>
                  <a>
                    <div class="one">
                      <h4>蛋糕3选1,约8英寸，圆</h4>
                      <p>
                        <span>
                          <b class="dl">￥</b>56
                        </span>
                        <b class="sale">已售17</b>
                      </p>
                    </div>
                  </a>
                </div>
                <div class="more">
                  展开<i class="el-icon-arrow-down"/>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value5: 4.7
    }
  }
}
</script>

<style lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.storeList {
  margin: 30px 0 0 20px;
  .list {
    padding: 15px 20px 21px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    color: #666;
    .tags {
      padding-bottom: 13px;
      font-size: 14px;
      line-height: 20px;
      span {
        display: inline-block;
        min-width: 96px;
        a {
          padding: 0 10px;
        }
      }
    }
    .line {
      border-bottom: 1px solid #e5e5e5;
      overflow: hidden;
      height: 1px;
    }
    .list-ul {
      .btm {
        position: relative;
        border-bottom: 1px solid #e5e5e5 !important;
        padding-bottom: 18px;
        .img {
          width: 220px;
          height: 125px;
          float: left;
          border-radius: 4px;
          position: relative;
          .fl-count {
            background: #fb6433;
            border-radius: 2px;
            position: absolute;
            line-height: 13px;
            width: 20px;
            margin-left: -3px;
            margin-top: 3px;
            text-align: center;
            font-size: 12px;
            color: #fff;
            z-index: 200;
          }
          a {
            display: block;
          }
        }
      }
      li {
        margin-top: 20px;
        .info {
          padding: 4px 0 0 20px;
          max-width: 666px;
          font-size: 12px;
          float: left;
          .other {
            border-top: 1px dashed #e5e5e5;
            padding: 16px 0 0;
            .one {
              padding-bottom: 18px;
              h4 {
                font-size: 14px;
                line-height: 14px;
                margin: 0 0 2px;
                font-weight: 400;
                color: #666;
              }
              p {
                line-height: 21px;
                font-size: 12px;
                color: #999;
                .sale {
                  margin-left: 10px;
                }
                span {
                  font-size: 15px;
                  color: #f60;
                  display: inline-block;
                  margin-right: 10px;
                  .dl {
                    font-size: 12px;
                  }
                }
              }
            }
            .more {
              color: #999;
              line-height: 17px;
              cursor: pointer;
            }
          }
          h4 {
            font-size: 16px;
            line-height: 22px;
            color: #222;
          }
          .source {
            padding: 6px 0 0;
            height: 17px;
            line-height: 13px;
            .el-rate {
              display: inline-block;
            }
            .comment {
              display: inline-block;
              color: #f60;
              margin-left: 10px;
            }
          }
          .desc {
            line-height: 17px;
            color: #666;
            padding-top: 7px;
            margin-bottom: 11px;
            span {
              display: block;
              margin-top: 8px;
            }
          }
        }
      }
      .clear {
        &:after {
          content: '';
          clear: both;
          display: block;
          width: 0;
          height: 0;
        }
      }
    }
  }
}
</style>
