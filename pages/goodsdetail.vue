<template>
  <div class="goods-detail">
    <div class="title">
      <h3 >
        <template
          v-for="(navbarList,i) in dealInfo.navbar">
          {{ navbarList.text }}
          <span
            v-if="i != dealInfo.navbar.length-1"
            :key="i"> > </span>
        </template>
      </h3>
    </div>
    <div class="datail clear">
      <div class="left">
        <div class="imgbox">
          <img :src="dealInfo.imageText[0].image">
        </div>
      </div>
      <div class="info">
        <p class="gtitle">{{ dealInfo.brandName }}</p>
        <p class="name">
          {{ dealInfo.dealName }}
        </p>
        <div class="line"/>
        <div class="deal-info">
          <dl
            class="detail-row"
            style="padding-bottom: 20px;">
            <dt class="v-bottom">团购价</dt>
            <dd>
              <span class="icon-rmb">￥</span><span class="cprice">{{ dealInfo.price }}</span>
              <del class="dprice">最高门店价¥{{ dealInfo.value }}</del>
              <span class="deal-discount">{{ dealInfo.discount }}</span>
              <span class="sold-num">{{ dealInfo.sales }}</span>
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
                <ul
                  id="ulList"
                  class="deal-tag-list thidden">
                  <li
                    v-for="(dealsList,index) in dealInfo.deals"
                    :key="index"
                    :class="dealId == dealsList.dealId ?'deal-tag active':'deal-tag '">
                    <a >{{ dealsList.title }}</a>
                  </li>
                </ul>
                <span
                  id="addMore"
                  class="deal-more"
                  @click="addMore">
                  展开全部{{ dealInfo.deals.length }}个套餐
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
                <span>&nbsp;&nbsp;{{ dealInfo.minNum }}&nbsp;&nbsp;</span>
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
            <dd>{{ dealInfo.usefulTime }}</dd>
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
              <span
                v-for="(tagList,index) in dealInfo.tags"
                :key="index">{{ tagList.text }}
                <span v-if="index != dealInfo.tags.length-1">|</span>
              </span>
            </dd>
          </dl>
        </div>
      </div>

    </div>

    <div
      id="navList"
      class="tab-list-wrapper">
      <div id="affix"><!--样式添加-->
        <div class="affix-content">
          <ul
            id="tab-list"
            class="tab-list">
            <li class="active"><a href="#poiList">使用门店</a></li>
            <li><a href="#menus">套餐详情</a></li>
            <li><a href="#terms">购买须知</a></li>
            <li><a href="#userComment">用户点评</a></li>
          </ul>
          <!--<el-button round>立即抢购</el-button>-->
        </div>
      </div>
    </div>

    <div
      id="poiList"
      class="deal-main-wrapper">
      <h2>{{ poiList.poiCnt }}家适用门店</h2>
      <div
        class="clear"
        style="width: 100%;background: #fff;">
        <div
          v-for="(dealPoisInfo,index) in poiList.dealPoisInfo.slice(0,3)"
          :key="index"
          :style="poiList.poiCnt>2?'width:33.33%':'width:100%'"
          class="deal-poi-list">
          <div class="wrapper">
            <div class="deal-poi">
              <h2>{{ dealPoisInfo.poiName }}</h2>
              <div class="score">
                <el-rate
                  v-model="dealPoisInfo.poiScore "
                  :value="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}分"/>
              </div>
              <dl class="tel">
                <dt>电话</dt>
                <dd>{{ dealPoisInfo.phone }}</dd>
              </dl>
              <dl class="addr">
                <dt>地址</dt>
                <dd>{{ dealPoisInfo.address }}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="poiList.poiCnt>2"
        class="btn">
        <el-button
          type="text"
          @click="poiListDVisible = true">查看更多</el-button>
      </div>
    </div>
    <div
      id="menus"
      class="deal-menus">
      <h2>套餐详情</h2>
      <table>
        <tbody>
          <tr>
            <th class="content">套餐内容</th>
            <th class="price">单价</th>
            <th class="num">数量/规格</th>
            <th class="total">小计</th>
          </tr>

          <tr
            v-for="(menusList,index) in dealInfo.menus"
            :key="index">
            <td
              v-if="menusList.type==3"
              class="dish-title">{{ menusList.content }}</td>
          </tr>
          <tr
            v-for="(menusList,index) in dealInfo.menus"
            v-if="menusList.type==4"
            :key="index">
            <td >{{ menusList.content }}</td>
            <td >{{ menusList.price }}</td>
            <td >{{ menusList.specification }}</td>
            <td >{{ menusList.total }}</td>
          </tr>
          <tr class="deal-menus-price">
            <td/>
            <td/>
            <td>
              价值：{{ dealInfo.value }}
            </td>
            <td>
              美团价<span>￥{{ dealInfo.price }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-for="(menusList,index) in dealInfo.menus"
        v-if="menusList.type==5"
        :key="index">
        <ul class="deal-menus-remark">
          <li
            v-for="(contetnList,index) in menusList.content.split('\n')"
            :key="index">{{ contetnList }}</li>
        </ul>
      </div>
    </div>
    <div
      id="terms"
      class="deal-terms">
      <h2>购买须知</h2>
      <table>
        <tbody>
          <tr>
            <td>{{ dealInfo.terms[0].title }}</td>
            <td>
              <p>{{ dealInfo.terms[0].content[0] }}</p>
            </td>
          </tr>
          <tr>
            <td>{{ dealInfo.terms[1].title }}</td>
            <td>
              <p>{{ dealInfo.terms[1].content[0] }}</p>
            </td>
          </tr>
          <tr>
            <td>{{ dealInfo.terms[2].title }}</td>
            <td>
              <p
                v-for="(contentList,index) in dealInfo.terms[2].content"
                :key="index"><span >{{ contentList }}</span></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      id="userComment"
      class="deal-img">
      <h2>图文详情</h2>
      <ul class="deal-images">
        <li
          v-for="(imageTextList,index) in dealInfo.imageText"
          :key="index">
          <img :src="imageTextList.image">
          <span>{{ imageTextList.desc }}</span>
        </li>
      </ul>
    </div>
    <!--用户点评-->
    <div style="width: 950px">
      <comment
        :comments="comments"/>
    </div>

    <!--弹窗-->
    <el-dialog
      :visible.sync="poiListDVisible"
      width="70%"
      center>
      <div class="poibd clear">
        <div
          v-for="(dealPoisInfoList,index) in poiList.dealPoisInfo"
          :key="index"
          class="bd-list" >
          <h2>{{ dealPoisInfoList.poiName }}</h2>
          <div>
            <el-rate
              v-model="dealPoisInfoList.poiScore"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分"/>
          </div>
          <div>电话：{{ dealPoisInfoList.phone }}</div>
          <div>地址：{{ dealPoisInfoList.address }}</div>
        </div>
      </div>

    </el-dialog>

  </div>
</template>
<script>
import Topbar from '../components/public/header/topbar'
import comment from '../components/details/comment.vue'
export default {
  components: {
    Topbar,
    comment
  },
  data() {
    return {
      value5: 4.6,
      poiId: '',
      dealInfo: [],
      poiList: [],
      comments: [],
      poiListDVisible: false
    }
  },
  async asyncData(ctx) {
    let _this = this
    let { status, data } = await ctx.$axios.get('/goodsdetail/getGoodsDetail')
    let list = data.data[0].poiList.dealPoisInfo
    list.forEach(function(item) {
      item.poiScore = item.poiScore / 10
    })
    return {
      dealInfo: data.data[0].dealInfo,
      poiList: data.data[0].poiList,
      comments: data.data[0].comment,
      dealId: data.data[0].dealId
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      var offsetTop1 = document.querySelector('#navList').offsetTop
      var poiListTop1 = document.querySelector('#poiList').offsetTop
      var menusTop1 = document.querySelector('#menus').offsetTop
      var termsTop1 = document.querySelector('#terms').offsetTop
      var userCommentTop1 = document.querySelector('#userComment').offsetTop
      if (scrollTop > offsetTop1) {
        $('#affix').addClass('affix')
        $('.tab-list').css('width', '')
        $('.affix-content').css('left', '165px')
      } else {
        $('#affix').removeClass('affix')
        $('.tab-list').css('width', '100%')
        $('.affix-content').css('left', '')
      }
      if (scrollTop > menusTop1) {
        $('#menus').addClass('active')
        $('#poiList').removeClass('active')
        if (scrollTop > termsTop1) {
          $('#terms').addClass('active')
          $('#menus').removeClass('active')
          $('#poiList').removeClass('active')
          if (scrollTop > userCommentTop1) {
            $('#userComment').addClass('active')
            $('#terms').removeClass('active')
            $('#menus').removeClass('active')
            $('#poiList').removeClass('active')
          } else {
            $('#userComment').removeClass('active')
          }
        } else {
          $('#terms').removeClass('active')
        }
      } else {
        $('#menus').removeClass('active')
      }
    },
    addMore: function() {
      // console.log(123)
      $('#ulList').removeClass('thidden')
      $('#addMore').css('display', 'none')
      //$('#ulList').append('<span class="">收起</span>')
    },
    priMore: function() {
      $('#ulList').addClass('thidden')
    }
  }
}
</script>
<style lang="scss">
.goods-detail {
  margin-left: 20px;
  ul li {
    list-style: none;
  }
  .title {
    margin: 20px 0;
    color: #666;
    span {
      .last-span {
        &:last-child {
          display: none;
        }
      }
    }
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
            .thidden {
              overflow: hidden;
              max-height: 50px;
              position: relative;
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
  .tab-list-wrapper {
    margin-top: 50px;
    height: 79px;
    .affix {
      width: 100%;
      background-color: #fff;
      z-index: 1999;
      box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      position: fixed;
      top: 0;
      left: 0;
      height: 90px;
      transition: background 0.6s ease, width 0.6s ease, box-shadow 0.6s ease;
    }
    .affix-content {
      overflow: hidden;
      position: relative;
      .tab-list {
        display: inline-block;
        border-bottom: 2px solid #e5e5e5;
        transition: background 0.6s ease, width 0.6s ease;
        width: 100%;
        li {
          display: inline-block;
          padding: 26px 0 19px;
          margin-right: 21px;
          margin-bottom: -2px;
          width: 90px;
          text-align: center;
          font-size: 20px;
          color: #666;
          border-bottom: 6px solid transparent;
          cursor: pointer;
          transition: color 0.3s ease, border-color 0.3s ease;
        }
        .active {
          color: #31bbac;
          border-color: #31bbac;
        }
      }
    }
  }
  .deal-main-wrapper {
    width: 950px;
    h2 {
      margin: 40px 0 8px;
      font-size: 20px;
      line-height: 28px;
      color: #222;
      margin-bottom: 10px;
    }
    .deal-poi-list {
      padding: 20px;
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      background-color: #fff;
      float: left;
      min-height: 160px;
      .wrapper {
        margin: 0 -33px 0 -34px;
        .deal-poi {
          display: inline-block;
          width: 280px;
          margin: 0 32px 0 33px;
          vertical-align: top;
          h2 {
            margin: 0 0 6px;
            font-size: 16px;
            line-height: 22px;
          }
          .score {
            font-size: 14px;
            color: #666;
          }
          dl {
            margin: 6px 0 0;
            line-height: 20px;
            dt {
              float: left;
            }
            dd {
              margin-left: 42px;
            }
          }
        }
      }
    }
    .btn {
      width: 100%;
      text-align: center;
      background: #fff;
      padding-bottom: 10px;
    }
  }
  .deal-menus {
    margin-top: 30px;
    width: 950px;
    h2 {
      margin-bottom: 10px;
    }
    table {
      padding: 0 20px;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      background-color: #fff;
      th {
        padding: 15px 0 15px 30px;
        font-size: 14px;
        line-height: 20px;
        color: #666;
        text-align: right;
        border-bottom: 1px solid #e5e5e5;
      }
      .price {
        width: 110px;
      }
      .num {
        width: 133px;
      }
      .total {
        width: 98px;
      }
      th:first-child {
        padding-left: 0;
        text-align: left;
        width: 479px;
      }
      td {
        padding: 10px 0 10px 30px;
        color: #222;
        border: none;
        vertical-align: top;
        white-space: nowrap;
        text-align: right;
      }
      td:first-child {
        padding-left: 0;
        text-align: left;
        width: 479px;
        white-space: normal;
      }
      .dish-title {
        position: relative;
        font-weight: 800;
        &:before {
          content: '';
          position: absolute;
          top: 19px;
          left: -7px;
          width: 3px;
          height: 3px;
          border-radius: 3px;
          background-color: #666;
        }
      }
      .deal-menus-price {
        td {
          color: #666;
          border-top: 1px solid #e5e5e5;
          white-space: nowrap;
          span {
            color: #f90;
          }
        }
      }
    }
    .deal-menus-remark {
      margin-top: 10px;
      font-size: 12px;
      line-height: 20px;
      color: #666;
    }
  }
  .deal-terms {
    margin-top: 30px;
    width: 950px;
    h2 {
      margin-bottom: 10px;
    }
    table {
      padding: 0 20px;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      background-color: #fff;
      tr {
        td {
          padding: 10px 0;
          line-height: 20px;
          vertical-align: top;
          p {
            margin: 0;
          }
        }
        td:first-child {
          padding-right: 17px;
          font-size: 14px;
          color: #222;
          white-space: nowrap;
        }
        td:last-child {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
  .deal-img {
    width: 950px;
    margin-top: 30px;
    h2 {
      margin-bottom: 20px;
    }
    .deal-images {
      padding: 20px 20px 10px;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      background-color: #fff;
      img {
        width: 100%;
      }
      span {
        display: inline-block;
        padding: 15px 0 20px;
        font-size: 14px;
        line-height: 20px;
        color: #222;
      }
    }
  }
  .poibd {
    padding: 60px 30px;
    width: 100%;
    height: 100%;
    .bd-list {
      display: inline-block;
      width: 260px;
      margin: 0 32px 20px 33px;
      vertical-align: top;
    }
  }
}
</style>
