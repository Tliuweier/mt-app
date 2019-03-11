<template>
  <div class="comment">
    <div class="title">{{ comments.count }}条网友点评 <span>质量排序</span><span>时间排序</span></div>
    <div class="com-cont clear">
      <div class="tag">

        <el-tag
          v-for="(tagList,index) in comments.tags"
          :key="index">{{ tagList.content }}({{ tagList.count }})</el-tag>
      </div>
      <div class="sea">
        <el-checkbox
          v-model="checked"
          @change="fliterimg">只看图片的评论</el-checkbox></div>
      <div>
        <div
          v-for="(commentsList) in comments.comments"
          v-if="commentsList"
          :key="commentsList.id"
          class="list clear">
          <div class="header">
            <img :src="commentsList.user.imgUrl">
          </div>
          <div class="info">
            <div class="name">{{ commentsList.user.userName }}</div>
            <div class="source">
              <el-rate
                v-model="commentsList.star"
                disabled
                text-color="#ff9900" />
              <span class="date">{{ commentsList.modData }}</span>
            </div>
            <div class="desc">{{ commentsList.content }}</div>
            <div class="noshowBigImg">
              <img
                v-for="(imgList,index) in commentsList.pics"
                :key="index"
                :src="imgList">
            </div>
            <div class="address">
              {{ commentsList.poiInfo.title }}
            </div>
            <div class="lines"/>
          </div>
        </div>

        <!--按钮-->
        <div class="mt-paginations">

          <el-pagination
            v-if="comments.count"
            :total="comments.count "
            layout="prev, pager, next"
            @current-change="handlechangenumber"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Object,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      value2: 4,
      checked: false
    }
  },
  methods: {
    handlechangenumber: function(val) {
      let page = val
      let _this = this
      _this.$axios
        .get('/goodsdetail/getcomment', {
          params: {
            page
          }
        })
        .then(({ status, data }) => {
          if (status === 200) {
            this.$emit('handcomments', data)
          }
        })
    },
    fliterimg: function(val) {
      if (val) {
        let filterImg = this.comments.comments.filter(this.noImg)
        this.$emit('filterImg', filterImg)
        filterImg.reverse()
      } else {
        this.handlechangenumber(1)
      }
    },
    noImg: function(element, index, array) {
      return element.pics.length > 0
    }
  }
}
</script>

<style lang="scss">
.comment {
  margin-top: 20px;
  //margin-left: 20px;
  .title {
    font-size: 18px;
    color: #222;
    margin-bottom: 8px;
    span {
      font-size: 12px;
      color: #666;
      float: right;
      margin-right: 10px;
    }
  }
  .com-cont {
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 0 20px 40px;
    .tag {
      margin-top: 10px;
      padding: 10px;
      .el-tag {
        margin-right: 5px;
      }
    }
    .sea {
      margin-top: 22px;
      font-size: 14px;
      margin-bottom: 40px;
      .el-checkbox__label {
        color: #666;
      }
    }
    .list {
      padding: 20px 0 0;
      .header {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        float: left;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          top: -45px;
          position: relative;
        }
      }
      .info {
        float: left;
        width: 800px;
        padding-left: 20px;
        position: relative;
        top: -40px;
        .name {
          font-size: 16px;
          color: #222;
          line-height: 22px;
          margin-bottom: 1px;
        }
        .date {
          font-size: 12px;
          line-height: 20px;
          color: #999;
        }
        .source {
          .el-rate {
            display: inline-block;
          }
          .date {
            float: right;
            display: inline-block;
          }
        }
        .desc {
          font-size: 14px;
          line-height: 20px;
          padding-top: 13px;
        }
        .noshowBigImg {
          margin-top: 4px;
          img {
            width: 140px;
            height: 140px;
            margin-right: 15px;
          }
        }
        .address {
          margin: 10px 0;
        }
        .lines {
          margin-top: 40px;
          height: 1px;
          overflow: hidden;
          border-bottom: 1px solid #e5e5e5;
        }
      }
    }
    .mt-paginations {
      text-align: center;
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
