<template>
  <div class="comment">
    <div class="title">{{ comments.count }}条网友点评 <span>质量排序</span><span>时间排序</span></div>
    <div class="com-cont clear">
      <div class="tag">

        <el-tag
          v-for="(tagList,index) in comments.tags"
          :key="index">{{ tagList.tag }}({{ tagList.count }})</el-tag>
      </div>
      <div class="sea">
        <el-checkbox v-model="checked">只看图片的评论</el-checkbox>
      </div>
      <div>
        <div
          v-for="(commentsList,index) in comments.comments"
          :key="index"
          class="list clear">
          <div class="header">
            <img :src="commentsList.userUrl">
          </div>
          <div class="info1">
            <div class="name">{{ commentsList.userName }}</div>
            <div class="source">
              <el-rate
                v-model="commentsList.star"
                disabled
                text-color="#ff9900" />
              <span class="date">{{ commentsList.commentTime }}</span>
            </div>
            <div class="desc">{{ commentsList.comment }}</div>
            <div
              v-if="commentsList.merchantComment "
              class="merchantComment">商家回复：{{ commentsList.merchantComment }}</div>
            <div class="noshowBigImg">
              <img
                v-for="(imgList,index) in commentsList.picUrls"
                :key="index"
                :src="imgList.url">
            </div>
            <div :class="commentsList.zanCnt>0?'like':'unlike'">
              <span><i class="iconfont icon-dianzan"/>赞</span>
            </div>
            <div
              v-if="false"
              class="address">
              test
            </div>
            <div class="lines"/>
          </div>
        </div>
        <!--按钮-->
        <div class="mt-pagination">
          <ul class="pagination clear">
            <li>
              <span class=" el-icon-arrow-left"/>
            </li>
            <li>
              <span class="active">1</span>
            </li>
            <li>
              <span class="el-icon-arrow-right"/>
            </li>
          </ul>
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
      checked: true
    }
  }
}
</script>

<style lang="scss">
.comment {
  margin-top: 20px;
  margin-left: 20px;
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
      .info1 {
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
        .merchantComment {
          margin: 10px 0;
          color: #31bbac;
          font-size: 14px;
          line-height: 20px;
        }
        .noshowBigImg {
          margin-top: 4px;
          img {
            width: 140px;
            height: 140px;
            margin-right: 15px;
          }
        }
        .like {
          margin: 10px 0;
          display: flex;
          justify-content: flex-end;
          color: #2bb8aa;
        }
        .unlike {
          margin: 10px 0;
          display: flex;
          justify-content: flex-end;
          color: #e5e5e5;
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
    .mt-pagination {
      text-align: center;
      ul {
        list-style: none;
        display: inline-block;
        li {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin: 0 10px;
          font-size: 16px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          transition: background-color 0.5s;
          span {
            border: 1px solid #e5e5e5;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            text-decoration: none;
            line-height: 40px;
          }
          .active {
            color: #fff;
            background-color: #13d1be;
            border-color: #13d1be;
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
