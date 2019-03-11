<template>
  <div class="details">
    <el-button
      type="text"
      style="margin-left: 25px"
      @click="dialogTableVisible = true">餐单详情页</el-button>
    <el-dialog
      :visible.sync="dialogTableVisible"
      width="60%"
      @open="openDetail">
      <div class="info clear">
        <div class="pic">
          <div class="imgbox">
            <img
              :src="goodsDetail.imgUrl">
          </div>
        </div>
        <div class="dea">
          <p class="name">{{ goodsDetail.title }}</p>
          <p class="price"><span>￥{{ goodsDetail.price }}</span><span class="small">门店价￥{{ goodsDetail.value }}</span></p>
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
          <div
            v-for="(menusList,mindex) in goodsDetail.menu"
            v-if="menusList.type==='0'&&menusList.notDishes === 'false'"
            :key="mindex"

            class="name clear">
            <div class="fl">{{ menusList.content }}</div>
            <div class="fr">
              <p
                v-for="(nMenusList,tindex) in even(goodsDetail.menu,mindex)"
                :key="tindex">
                <span class="title">{{ nMenusList.content }}</span>
                <span>￥{{ nMenusList.price }}</span><span>{{ nMenusList.specification }}</span>
                <span class="last">￥{{ nMenusList.total }}</span>
              </p>
            </div>
          </div>
          <div class="total"><span>价值: ￥{{ goodsDetail.value }}</span><span>美团价: <b>￥{{ goodsDetail.price }}</b></span></div>
        </div>
      </div>
      <ul
        v-for="(menusList,index) in goodsDetail.menu"
        :key="index"
        class="tips">
        <template v-if="menusList.notDishes === 'true' && menusList.type==='0'">
          <li
            v-for="(contentList,index) in menusList.content.split('\n')"
            :key="index">{{ contentList }}</li>
        </template>


      </ul>
      <div class="notes">
        <h4>购买须知</h4>
        <div class="cont">
          <p
            v-for="(termsList,index) in goodsDetail.terms"
            :key="index"
            class="clear">
            <span class="fl">{{ termsList.title }}</span>
            <span
              v-for="(content,index) in termsList.content"
              :key="index"
              class="fr">{{ content }}</span>
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
    <!--导航-->
    <el-row>
      <el-col :span="24">
        <div style="margin-left: 25px;margin-bottom: 20px;">
          <template
            v-for="(crumbNavList,index) in shoplist.crumbNav">
            {{ crumbNavList.title }}
            <span
              v-if="index != shoplist.crumbNav.length-1"
              :key="index"> > </span>
          </template>
        </div>

      </el-col>
    </el-row>
    <!--商家信息-->
    <el-row>
      <el-col :span="24">
        <summa :shoplist="shoplist" />
      </el-col>
    </el-row>
    <!--商家优惠-->
    <el-row>
      <el-col :span="20">
        <list :deallist="deallist"/>
      </el-col>
      <el-col :span="4">
        6
      </el-col>
    </el-row>
    <!--用户点评-->
    <el-row>
      <el-col :span="20">
        <comment :comments="comment"/>
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
      shoplist: [],
      deallist: [],
      comment: [],
      nMenuS: [],
      goodsDetail: [],
      dialogTableVisible: false
    }
  },
  async asyncData(ctx) {
    let _this = this
    let { status, data } = await ctx.$axios.get(
      `https://www.easy-mock.com/mock/5c3d267b64a635155144871a/example/store/getStore`
    )
    if (status == 200) {
      if (data.code == 1) {
        let commentList = data.data.storeDetail[0].comment.comments
        commentList.forEach(function(item) {
          item.star = item.star / 10
          item.commentTime = new Date(parseInt(item.commentTime))
            .toLocaleString()
            .replace(/:\d{1,2}$/, '')
        })
        return {
          shoplist: data.data.storeDetail[0],
          deallist: data.data.storeDetail[0].dealList,
          comment: data.data.storeDetail[0].comment
        }
      }
    }
  },
  methods: {
    openDetail: function() {
      this.$axios
        .get(
          `https://www.easy-mock.com/mock/5c3d267b64a635155144871a/example/store/getDetail`
        )
        .then(res => {
          //console.log(_this)
          //console.log(this)
          this.goodsDetail = res.data.data.data
        })
    },
    even: function(list, index) {
      console.log(list)
      console.log(index)
      const end = 0 //结束位置
      for (var i = index + 1; i < list.length; i++) {
        if (
          this.goodsDetail.menu[i].type === '0' &&
          this.goodsDetail.menu[i].notDishes === 'false'
        ) {
          return this.goodsDetail.menu.slice(index + 1, i)
        } else {
          if (
            this.goodsDetail.menu[i].type === '0' &&
            this.goodsDetail.menu[i].notDishes === 'true'
          ) {
            return this.goodsDetail.menu.slice(index + 1, i)
          }
        }
      }
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
