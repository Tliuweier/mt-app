<template>
  <div class="details">
    <el-button
      type="text"
      style="margin-left: 25px"
      @click="dialogTableVisible = true">餐单详情页</el-button>
    <el-dialog
      :visible.sync="dialogTableVisible"
      width="60%" >
      <div class="info clear">
        <div class="pic">
          <div class="imgbox">
            <img
              src="../assets/img/test1.jpg">
          </div>
        </div>
        <div class="dea">
          <p class="name">超值2-3人套餐</p>
          <p class="price"><span>￥125</span><span class="small">门店价￥148</span></p>
          <p class="actions">
            <el-button round>立即抢购</el-button>
            <el-button round>查看详情</el-button>
          </p>
        </div>
      </div>
      <div class="order">
        <h4>本单详情</h4>
        <div class="dea">
          <div class="cont">套餐内容
            <div class="fr">
              <span>单价</span>
              <span>数量/规格</span>
              <span class="last">小计</span>
            </div>
          </div>
          <div class="name clear">
            <div class="fl">饮品7选2（可重复选）</div>
            <div class="fr">
              <p>
                <span class="title">朱古力2.0（热/冷）</span>
                <span>￥25</span><span>1 杯</span>
                <span class="last">￥25</span>
              </p>
              <p>
                <span class="title">朱古力2.0（热/冷）</span>
                <span>￥25</span><span>1 杯</span>
                <span class="last">￥25</span>
              </p>
              <p>
                <span class="title">西红柿炒蛋</span>
                <span>￥300</span><span>1 份</span>
                <span class="last">￥300</span>
              </p>
            </div>
          </div>
          <div class="name clear">
            <div class="fl">饮品7选2（可重复选）</div>
            <div class="fr">
              <p>
                <span class="title">朱古力2.0（热/冷）</span>
                <span>￥25</span><span>1 杯</span>
                <span class="last">￥25</span>
              </p>
              <p>
                <span class="title">朱古力2.0（热/冷）</span>
                <span>￥25</span><span>1 杯</span>
                <span class="last">￥25</span>
              </p>
            </div>
          </div>
          <div class="total"><span>价值: ￥148</span><span>美团价: <b>￥125</b></span></div>
        </div>
      </div>
      <ul class="tips">
        <li>免费提供餐巾纸</li>
        <li>以上为近一期菜单，厨师会根据当日食材新鲜情况，创意定制~</li>
      </ul>
      <div class="notes">
        <h4>购买须知</h4>
        <div class="cont">
          <p class="clear">
            <span class="fl">有效期</span>
            <span class="fr">2018.7.5 至 2019.1.31（周末、法定节假日通用）</span>
          </p>
          <p class="clear">
            <span class="fl">使用时间</span>
            <span class="fr">美团券24小时可用</span>
          </p>
          <p class="clear">
            <span class="fl">使用规则</span>
            <span class="fr">需提前预约哦~，每张美团券建议1人使用，店内无包间，仅限餐前外带，可以打包，打包费详情咨询商家，团购用户不可同时享受商家其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替换，具体事宜请与店内协商，提供免费WiFi</span>
          </p>
        </div>
      </div>
      <div class="photos">
        <h4>美团实拍</h4>
        <ul>
          <li>
            <div class="imgbox">
              <img src="../assets/img/test1.jpg">
            </div>
          </li>
          <li>
            <div class="imgbox">
              <img src="../assets/img/test1.jpg">
            </div>
          </li>
          <li>
            <div class="imgbox">
              <img src="../assets/img/test1.jpg">
            </div>
          </li>
        </ul>
      </div>
      <div class="line"/>
      <div class="goPoi">
        <el-button
          round>查看 板崎厨师发办，建议单人使用 全部详情</el-button>
      </div>
    </el-dialog>
    <el-row>
      <el-col :span="24">
        <div style="margin-left: 25px;margin-bottom: 20px;">广州美团>广州美食>广州西餐</div>

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <summa />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20">
        <list/>
      </el-col>
      <el-col :span="4">
        6
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20">
        <comment/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import summa from '@/components/details/summary.vue'
import list from '@/components/details/list.vue'
import comment from '@/components/details/comment.vue'
export default {
  components: {
    summa,
    list,
    comment
  },
  data() {
    return {
      dialogTableVisible: false
    }
  }
}
</script>
<style lang="scss">
.el-dialog {
  z-index: 999;
}
.info {
  padding: 40px 0px 20px 40px;
  .pic {
    float: left;
    width: 150px;
    height: 150px;
    border-radius: 4px;
    .imgbox {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
  }
  .dea {
    float: left;
    padding: 1px 0 0 40px;
    max-width: 600px;
    .name {
      font-size: 26px;
      line-height: 37px;
      margin-bottom: 6px;
      color: #222;
    }
    .price {
      font-size: 24px;
      line-height: 29px;
      color: #31bbac;
      .small {
        color: #666;
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .actions {
      margin-top: 33px;
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
.order {
  padding-top: 40px;
  color: #666;
  h4 {
    margin-bottom: 6px;
  }
  .dea {
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    background: #fff;
    padding: 20px;
    .cont {
      height: 48px;
      font-size: 14px;
      line-height: 48px;
      border-bottom: 1px solid #e5e5e5;
      .fr {
        float: right;
        //margin-top: -5px;
        span {
          width: 110px;
          text-align: center;
          display: inline-block;
        }
        .last {
          text-align: right;
          padding: 0;
          width: 65px;
        }
      }
    }
    .name {
      padding: 10px;
      .fl {
        float: left;
        width: 154px;
      }
      .fr {
        float: right;
        margin-top: -5px;
        p {
          margin: 0;
          margin-bottom: 5px;
          .title {
            width: 173px;
            padding: 0;
            text-align: left;
            display: inline-block;
          }
          span {
            width: 110px;
            text-align: center;
            display: inline-block;
          }
          .last {
            text-align: right;
            padding: 0;
            width: 65px;
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
    .total {
      margin-top: 20px;
      border-top: 1px solid #e5e5e5;
      font-size: 14px;
      line-height: 49px;
      text-align: right;
      span {
        display: inline-block;
        margin-left: 53px;
        b {
          font-weight: 400;
          color: #f60;
        }
      }
    }
  }
}
.tips {
  margin-left: 20px;
  margin-top: 10px;
  li {
    font-size: 12px;
    color: #666;
  }
}
.notes {
  margin-top: 20px;
  h4 {
    margin-bottom: 10px;
  }
  .cont {
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background: #fff;
    padding: 0 0 20px 20px;
    p {
      margin-top: 20px;
      .fl {
        font-size: 16px;
        color: #222;
        float: left;
        width: 101px;
      }
      .fr {
        font-size: 12px;
        float: left;
        width: 800px;
        line-height: 20px;
        color: #666;
      }
    }
  }
}
.photos {
  overflow: hidden;
  padding-top: 40px;
  ul {
    width: 720px;
    list-style: none;
    padding: 20px 0 0 0;
    margin: 0 auto;
    li {
      float: left;
      width: 220px;
      height: 129px;
      border-radius: 4px;
      margin-right: 10px;
      .imgbox {
        height: 100%;
        width: 100%;
        img {
          margin: 0 auto;
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
    }
  }
}
.line {
  margin-top: 40px;
  height: 1px;
  overflow: hidden;
  border-bottom: 1px solid #e5e5e5;
}
.goPoi {
  margin: 20px 0;
  text-align: center;
}
</style>
